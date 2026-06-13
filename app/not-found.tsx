import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-8">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-bold">This export corridor doesn&apos;t exist</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you&apos;re looking for has been redirected or is no longer available. Return to the dashboard to continue managing your shipments.
        </p>
        <Link
          href="/dashboard/manager"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
