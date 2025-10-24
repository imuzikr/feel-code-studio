import { Progress } from '@/components/ui/progress';

interface HeaderProps {
  completedCount: number;
  totalCount: number;
}

export const Header = ({ completedCount, totalCount }: HeaderProps) => {
  const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              🚀 웹 컴포넌트 마스터
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              바이브 코딩으로 배우는 웹 개발 컴포넌트
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-4 bg-card px-6 py-3 rounded-full border border-border">
            <div className="text-right">
              <p className="text-xs text-muted-foreground">학습 진행률</p>
              <p className="text-lg font-bold text-secondary">{progress}%</p>
            </div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
