import type { Jobs } from '../types/Database';
import { ENDPOINTS } from '../app/api/endpoints';
import JobCard from './JobCard';

async function getJobs(): Promise<Jobs[]> {
  const url = new URL(`${process.env.JETADMIN_API_URL}${ENDPOINTS.JOBS}`);
  url.searchParams.set('organization__in', process.env.ORGANIZATION_ID!);
  url.searchParams.set('status__in', 'open');

  console.log(url);
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${process.env.JETADMIN_API_KEY}`,
    },
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return Array.isArray(data) ? data : (data.results ?? []);
}

export default async function JobsList() {
  const news = await getJobs();

  return (
    <div className="column gap-l">
      {news?.map((n, i) => (
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
