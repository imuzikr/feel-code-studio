export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type ComponentCategory = 'layout' | 'navigation' | 'input' | 'display' | 'feedback';

export interface ComponentData {
  id: string;
  name: string;
  englishName: string;
  description: string;
  category: ComponentCategory;
  difficulty: DifficultyLevel;
  tags: string[];
  icon: string;
  explanation: string;
  codeExample: string;
  useCase: string;
}
