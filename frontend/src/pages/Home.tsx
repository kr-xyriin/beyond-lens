import { Link } from 'react-router-dom';
import './home.css';

type IconName = 'search' | 'calendar' | 'check' | 'chat' | 'sprout' | 'shield' | 'briefcase';

function Icon({ name }: { name: IconName }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths: Record<IconName, React.ReactNode> = {
    search: <><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 4.5 4.5"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h3M8 17h3"/></>,
    check: <><rect x="4" y="4" width="16" height="16" rx="4"/><path d="m8 12 3 3 5-6"/></>,
    chat: <><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3-.6L4 20l1.6-5.2a7.5 7.5 0 1 1 14.4-3.3Z"/><path d="M9 11h7M9 14h4"/></>,
    sprout: <><path d="M12 21v-9M12 15C7 15 4 12 4 7c5 0 8 3 8 8ZM12 12c0-5 3-8 8-8 0 5-3 8-8 8Z"/></>,
    shield: <><path d="M12 2 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4Z"/><path d="m9 12 2 2 4-4"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12c5 4 13 4 18 0M12 13v3"/></>
  };
  return <svg className="cc-home-icon" viewBox="0 0 24 24" aria-hidden="true" {...common}>{paths[name]}</svg>;
}

const questions: { icon: IconName; text: string }[] = [
  { icon: 'sprout', text: 'Will I find the right environment to grow?' },
  { icon: 'shield', text: 'How safe are the campus and hostels?' },
  { icon: 'briefcase', text: 'What are the internship and placement opportunities like?' },
];

const steps: { icon: IconName; title: string; description: string }[] = [
  { icon: 'search', title: 'Find a Senior', description: 'Explore verified student profiles.' },
  { icon: 'calendar', title: 'Pick a Date', description: 'Choose a day that works for you.' },
  { icon: 'check', title: 'Reserve Your Conversation', description: 'Secure your date and get ready to connect.' },
  { icon: 'chat', title: 'Get Real Perspectives', description: 'Ask questions. Hear firsthand experiences.' },
];

export default function Home() {
  return <div className="cc-home">
    <section className="cc-home-hero" aria-labelledby="cc-home-title">
      <div className="cc-home-copy">
        <span className="eyebrow">Starting with UPES</span>
        <h1 id="cc-home-title">Before the Next Chapter,<span className="cc-home-headline-gradient">Let's Talk.</span></h1>
        <p>You're about to make one of the biggest decisions of your life. Before you commit, hear what college is really like from students already living it.</p>
        <div className="actions cc-home-actions">
          <Link className="primary" to="/seniors">Find a Senior <span aria-hidden="true">→</span></Link>
          <Link className="secondary" to="/how">How It Works <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="cc-home-visual" aria-label="Questions you can ask a senior">
        <div className="cc-home-glow" aria-hidden="true" />
        {questions.map((question, i) => <div className={`cc-home-question cc-home-question-${i + 1}`} key={question.text}>
          <span className="cc-home-question-icon"><Icon name={question.icon}/></span>
          <span>{question.text}</span>
        </div>)}
      </div>
    </section>
    <section className="cc-home-steps" aria-label="How CampusClarity works">
      {steps.map((step, i) => <article className="cc-home-step" key={step.title}>
        <div className="cc-home-step-top"><span className="cc-home-step-icon"><Icon name={step.icon}/></span><span className="cc-home-step-number">0{i + 1}</span></div>
        <h2>{step.title}</h2><p>{step.description}</p>
      </article>)}
    </section>
    <section className="section cc-home-more">
      <div className="section-head"><div><h2>Questions worth asking.</h2><p className="section-sub">Get perspectives beyond brochures and marketing.</p></div><Link className="secondary" to="/seniors">Explore Seniors →</Link></div>
      <div className="two-col">
        <div className="panel"><h3>Not sure what to ask?</h3><p>Campus life, academics, hostels, safety, internships, daily expenses—start with whatever matters most to you.</p><Link className="secondary" to="/how">See How It Works</Link></div>
        <div className="panel"><h3>Already booked a conversation?</h3><p>Find your booking, manage your appointment, or contact support if something goes wrong.</p><Link className="secondary" to="/bookings">My Bookings</Link></div>
      </div>
    </section>
  </div>;
}
