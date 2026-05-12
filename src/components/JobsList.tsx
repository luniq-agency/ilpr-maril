import JobCard from './JobCard';
import { jobsLoadFrontend } from '../actions/jobs';

export default async function JobsList() {
  const jobs = await jobsLoadFrontend();

  return (
    <div className="column gap-l">
      {jobs?.map((n, i) => (
        <JobCard
          key={i}
          headline={n.title}
          body={n.description}
          cta="Mehr erfahren"
          location={n.location}
          date={n.publish_date}
          slug={n.slug}
          excerpt={n.excerpt}
        />
      ))}
    </div>
  );
}
