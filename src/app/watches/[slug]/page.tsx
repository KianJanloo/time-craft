import WatchDetailClient from '@/components/pages/WatchDetailClient';

interface WatchDetailPageProps {
  params: {
    slug: string;
  };
}

export default function WatchDetailPage({ params }: WatchDetailPageProps) {
  return <WatchDetailClient slug={params.slug} />;
}
