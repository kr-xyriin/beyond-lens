from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
import subprocess
import xml.sax.saxutils as xml

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets' / 'commit-activity.svg'

def git(*args):
    return subprocess.check_output(['git', *args], cwd=ROOT, text=True).strip()

now = datetime.now(timezone.utc)
months = []
y, m = now.year, now.month
for _ in range(12):
    months.append(f'{y:04d}-{m:02d}')
    m -= 1
    if m == 0:
        m = 12
        y -= 1
months.reverse()
raw = git('log', '--all', '--format=%ad', '--date=format:%Y-%m', '--since=' + months[0] + '-01')
counts = Counter(raw.splitlines())
values = [counts.get(month, 0) for month in months]
max_val = max(1, max(values))
total = int(git('rev-list', '--count', 'HEAD'))
contributors = len(set(git('log', 'HEAD', '--format=%aE').splitlines()))

W, H = 920, 280
left, right, top, bottom = 60, 880, 80, 225
plot_h = bottom - top
step = (right - left) / 11
coords = [(left + i * step, bottom - value / max_val * plot_h) for i, value in enumerate(values)]
points = ' '.join(f'{x:.1f},{y:.1f}' for x, y in coords)
area = f'{left},{bottom} ' + points + f' {right},{bottom}'
parts = [f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="Beyond Lens commits by month for the last 12 months">
<rect width="920" height="280" rx="18" fill="#12101e"/>
<text x="32" y="39" fill="#f5f1ff" font-size="21" font-family="Arial,sans-serif" font-weight="bold">Beyond Lens · Commit activity</text>
<text x="32" y="61" fill="#b5abc9" font-size="13" font-family="Arial,sans-serif">{total} commits on main · {contributors} contributors · Last 12 months</text>
''']
for fraction in (0, .25, .5, .75, 1):
    y = bottom - fraction * plot_h
    parts.append(f'<line x1="{left}" y1="{y:.1f}" x2="{right}" y2="{y:.1f}" stroke="#39314c" stroke-dasharray="3 6"/>')
parts.append(f'<polygon points="{area}" fill="#8b5cf6" fill-opacity="0.18"/>')
parts.append(f'<polyline points="{points}" fill="none" stroke="#aa82ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>')
for (x, y), count, month in zip(coords, values, months):
    parts.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="4" fill="#c4b5fd"><title>{xml.escape(month)}: {count} commits</title></circle>')
for i in (0, 2, 4, 6, 8, 11):
    parts.append(f'<text x="{coords[i][0]:.1f}" y="252" text-anchor="middle" fill="#b5abc9" font-size="12" font-family="Arial,sans-serif">{datetime.strptime(months[i], "%Y-%m").strftime("%b %y")}</text>')
parts.append('</svg>')
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text('\n'.join(parts) + '\n', encoding='utf-8')
print(f'Generated {OUT} ({total} commits, {contributors} contributors)')
