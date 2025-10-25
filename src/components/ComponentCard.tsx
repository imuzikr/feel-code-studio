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
      case 'accordion':
        return (
          <div className="w-full space-y-2">
            <div className="border border-border rounded-lg">
              <button className="w-full px-3 py-2 text-left text-sm font-medium flex justify-between items-center bg-background hover:bg-muted">
                <span>섹션 1</span>
                <span>▼</span>
              </button>
              <div className="px-3 py-2 text-xs text-muted-foreground border-t border-border">
                펼쳐진 내용이 여기 표시됩니다.
              </div>
            </div>
          </div>
        );
      case 'pagination':
        return (
          <div className="flex gap-2 items-center">
            <Button variant="outline" size="sm">◀</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">▶</Button>
          </div>
        );
      case 'stepper':
        return (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-semibold">✓</div>
              <div className="w-8 h-0.5 bg-secondary"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">2</div>
              <div className="w-8 h-0.5 bg-muted"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-semibold">3</div>
          </div>
        );
      case 'context-menu':
        return (
          <Card className="p-2 bg-background border-border w-32">
            <div className="text-xs py-1 px-2 hover:bg-muted rounded cursor-pointer">복사</div>
            <div className="text-xs py-1 px-2 hover:bg-muted rounded cursor-pointer">붙여넣기</div>
            <div className="border-t border-border my-1"></div>
            <div className="text-xs py-1 px-2 hover:bg-muted rounded cursor-pointer text-destructive">삭제</div>
          </Card>
        );
      case 'drawer':
        return (
          <div className="relative w-full h-24 bg-background/50 border border-border rounded-lg overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-32 bg-card border-r border-border p-3 shadow-lg">
              <div className="space-y-2">
                <div className="h-2 bg-primary/50 rounded w-16"></div>
                <div className="h-2 bg-muted rounded w-20"></div>
                <div className="h-2 bg-muted rounded w-12"></div>
              </div>
            </div>
          </div>
        );
      case 'popover':
        return (
          <div className="relative">
            <Button size="sm">클릭</Button>
            <Card className="absolute top-10 left-0 p-3 bg-background border-border shadow-lg w-40 z-10">
              <h4 className="font-semibold text-xs mb-1">팝오버</h4>
              <p className="text-xs text-muted-foreground">추가 정보</p>
            </Card>
          </div>
        );
      case 'toast':
        return (
          <Card className="p-3 bg-card border-border shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-sm">✓</span>
              <p className="text-xs">저장되었습니다!</p>
            </div>
          </Card>
        );
      case 'spinner':
        return (
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        );
      case 'skeleton':
        return (
          <div className="w-full space-y-2">
            <div className="h-3 bg-muted rounded animate-pulse"></div>
            <div className="h-3 bg-muted rounded animate-pulse"></div>
            <div className="h-3 bg-muted rounded animate-pulse w-2/3"></div>
          </div>
        );
      case 'table':
        return (
          <div className="w-full overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-muted">
                <tr>
                  <th className="px-2 py-1 text-left">이름</th>
                  <th className="px-2 py-1 text-left">상태</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-2 py-1">홍길동</td>
                  <td className="px-2 py-1">활성</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-2 py-1">김철수</td>
                  <td className="px-2 py-1">대기</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'list-item':
        return (
          <div className="w-full space-y-2">
            <div className="flex items-center gap-3 p-2 bg-background hover:bg-muted rounded-lg border border-border">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-xs">👤</div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold">리스트 항목</h4>
                <p className="text-xs text-muted-foreground">설명 텍스트</p>
              </div>
            </div>
          </div>
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
