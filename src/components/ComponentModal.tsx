import { ComponentData } from '@/types/component';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ComponentModalProps {
  component: ComponentData | null;
  open: boolean;
  onClose: () => void;
}

export const ComponentModal = ({ component, open, onClose }: ComponentModalProps) => {
  if (!component) return null;

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

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-2xl shadow-glow">
              {component.icon}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl">{component.name}</DialogTitle>
              <DialogDescription className="font-mono text-primary">
                {component.englishName}
              </DialogDescription>
            </div>
            <Badge className={`${getDifficultyColor(component.difficulty)} border`}>
              {getDifficultyLabel(component.difficulty)}
            </Badge>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-y-auto pr-4">
          <div className="space-y-6 py-4">
            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">📝 설명</h4>
              <p className="text-muted-foreground leading-relaxed">{component.explanation}</p>
            </div>

            {/* Tags */}
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">🏷️ 태그</h4>
              <div className="flex flex-wrap gap-2">
                {component.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Code Example */}
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">💻 코드 예시</h4>
              <div className="bg-muted/30 border border-border rounded-lg p-4 max-h-96 overflow-auto">
                <pre className="text-sm font-mono text-foreground">
                  <code>{component.codeExample}</code>
                </pre>
              </div>
            </div>

            {/* Use Case */}
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">💡 사용 사례</h4>
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                <p className="text-sm text-foreground">{component.useCase}</p>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-gradient-card border border-border rounded-lg p-5">
              <h4 className="text-sm font-semibold text-accent mb-3 flex items-center gap-2">
                ✨ 학습 팁
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>AI에게 "{component.name}" 또는 "{component.englishName}"라고 요청하세요</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>위 코드 예시를 참고하여 구조를 이해하세요</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>실제 프로젝트에 적용하며 학습 효과를 높이세요</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
