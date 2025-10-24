import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { ComponentCard } from '@/components/ComponentCard';
import { ComponentModal } from '@/components/ComponentModal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { componentsData } from '@/data/components';
import { ComponentData, ComponentCategory } from '@/types/component';
import { Search } from 'lucide-react';

const Index = () => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ComponentCategory | 'all'>('all');
  const [completedComponents, setCompletedComponents] = useState<Set<string>>(new Set());

  const categories: { id: ComponentCategory | 'all'; name: string }[] = [
    { id: 'all', name: '전체' },
    { id: 'layout', name: '레이아웃' },
    { id: 'navigation', name: '네비게이션' },
    { id: 'input', name: '입력 요소' },
    { id: 'display', name: '표시 요소' },
    { id: 'feedback', name: '피드백' },
  ];

  const filteredComponents = useMemo(() => {
    return componentsData.filter((component) => {
      const matchesSearch =
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === 'all' || component.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleCardClick = (component: ComponentData) => {
    setSelectedComponent(component);
    setModalOpen(true);
    setCompletedComponents((prev) => new Set(prev).add(component.id));
  };

  return (
    <div className="min-h-screen">
      <Header completedCount={completedComponents.size} totalCount={componentsData.length} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="🔍 컴포넌트 이름이나 기능으로 검색하세요..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-base bg-card border-border focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={`
                relative overflow-hidden transition-all duration-300
                ${
                  activeCategory === category.id
                    ? 'shadow-glow'
                    : 'hover:border-primary/50'
                }
              `}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Learning Tips Section */}
        <div className="bg-gradient-card border border-border rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl shadow-glow">
              💡
            </div>
            <h2 className="text-2xl font-bold text-foreground">바이브 코딩 학습 팁</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            {[
              'AI와 대화하듯 자연스럽게 원하는 컴포넌트를 설명해보세요',
              '컴포넌트의 한글 이름과 영어 이름을 함께 익혀두면 소통이 더 원활해집니다',
              '카드의 미리보기로 실제 작동 방식을 체험해보세요',
              '카드 하단을 클릭하면 상세한 학습 자료를 확인할 수 있습니다',
              '난이도 표시를 참고하여 단계별로 학습을 진행하세요',
              '코드 예시를 직접 따라 작성하며 학습 효과를 높이세요',
            ].map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✓</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Components Grid */}
        {filteredComponents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((component) => (
              <ComponentCard
                key={component.id}
                component={component}
                onClick={() => handleCardClick(component)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">검색 결과가 없습니다</h3>
            <p className="text-muted-foreground">
              다른 키워드로 검색하거나 카테고리를 변경해보세요
            </p>
          </div>
        )}
      </main>

      {/* Component Detail Modal */}
      <ComponentModal
        component={selectedComponent}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      {/* Floating Action Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground shadow-glow transition-all duration-300 hover:scale-110 animate-float"
        aria-label="맨 위로"
      >
        ↑
      </button>
    </div>
  );
};

export default Index;
