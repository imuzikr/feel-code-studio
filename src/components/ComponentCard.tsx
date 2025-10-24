import { ComponentData } from '@/types/component';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ComponentCardProps {
  component: ComponentData;
  onClick: () => void;
}

export const ComponentCard = ({ component, onClick }: ComponentCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'intermediate':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'advanced':
        return 'bg-destructive/20 text-destructive border-destructive/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '초급';
      case 'intermediate':
        return '중급';
      case 'advanced':
        return '고급';
      default:
        return difficulty;
    }
  };

  const renderPreview = () => {
    switch (component.id) {
      case 'button':
        return (
          <div className="space-y-3">
            <Button>기본 버튼</Button>
            <Button variant="secondary">보조 버튼</Button>
          </div>
        );
      case 'input':
        return <Input placeholder="텍스트를 입력하세요..." />;
      case 'card':
        return (
          <Card className="p-4 bg-background/50 border-primary/20">
            <h4 className="font-semibold mb-1">카드 제목</h4>
            <p className="text-sm text-muted-foreground">카드 내용 예시</p>
          </Card>
        );
      case 'modal':
        return (
          <Card className="p-4 bg-background border-primary/20 max-w-[200px]">
            <h4 className="font-semibold mb-2">알림</h4>
            <p className="text-xs text-muted-foreground mb-3">모달 내용</p>
            <Button size="sm" className="w-full">확인</Button>
          </Card>
        );
      case 'navbar':
        return (
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-primary font-medium hover:underline">홈</a>
            <a href="#" className="text-foreground hover:text-primary hover:underline">소개</a>
            <a href="#" className="text-foreground hover:text-primary hover:underline">연락처</a>
          </nav>
        );
      case 'dropdown':
        return (
          <select className="px-4 py-2 bg-background border border-border rounded-md text-sm">
            <option>옵션을 선택하세요</option>
            <option>옵션 1</option>
            <option>옵션 2</option>
          </select>
        );
      case 'alert':
        return (
          <div className="p-3 bg-secondary/20 border border-secondary/30 rounded-lg text-sm">
            ✓ 작업이 성공적으로 완료되었습니다!
          </div>
        );
      case 'badge':
        return (
          <div className="flex gap-2">
            <Badge>New</Badge>
            <Badge variant="secondary">5</Badge>
            <Badge variant="outline">Sale</Badge>
          </div>
        );
      case 'tabs':
        return (
          <div className="flex gap-2">
            <Button variant="default" size="sm">탭 1</Button>
            <Button variant="outline" size="sm">탭 2</Button>
            <Button variant="outline" size="sm">탭 3</Button>
          </div>
        );
      case 'progress':
        return (
          <div className="w-full space-y-2">
            <Progress value={60} />
            <p className="text-xs text-center text-muted-foreground">60% 완료</p>
          </div>
        );
      case 'slider':
        return <Input type="range" min="0" max="100" defaultValue="50" className="w-full" />;
      case 'tooltip':
        return (
          <Button className="relative group">
            도움말
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              추가 정보가 여기 표시됩니다
            </span>
          </Button>
        );
      default:
        return <div className="text-sm text-muted-foreground">미리보기</div>;
    }
  };

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1">
      {/* Interactive Preview Section */}
      <div className="bg-background/50 p-6 min-h-[180px] flex items-center justify-center border-b border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)] pointer-events-none" />
        <div className="relative z-10 w-full flex items-center justify-center">
          {renderPreview()}
        </div>
      </div>

      {/* Card Info Section - Clickable for Modal */}
      <div className="p-5 cursor-pointer" onClick={onClick}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-xl flex-shrink-0 shadow-glow">
            {component.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-foreground">{component.name}</h3>
            <p className="text-xs text-muted-foreground font-mono">{component.englishName}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {component.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(component.difficulty)}`}>
          {getDifficultyLabel(component.difficulty)}
        </div>
      </div>
    </div>
  );
};
