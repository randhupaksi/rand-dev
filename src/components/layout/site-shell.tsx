type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="min-h-screen">
      <div className="page-shell flex min-h-screen flex-col">
        {children}
      </div>
    </main>
  );
}
