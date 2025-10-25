import { ComponentData } from '@/types/component';

export const componentsData: ComponentData[] = [
  {
    id: 'button',
    name: '버튼',
    englishName: 'Button',
    description: '클릭 가능한 인터랙티브 요소',
    category: 'input',
    difficulty: 'beginner',
    tags: ['클릭', '인터랙션', '액션'],
    icon: '🔘',
    explanation: '버튼은 사용자가 클릭하여 특정 동작을 실행할 수 있는 가장 기본적인 UI 요소입니다. 폼 제출, 페이지 이동, 모달 열기 등 다양한 용도로 활용됩니다.',
    codeExample: `<button class="primary-button">
  클릭하세요
</button>`,
    useCase: '로그인 버튼, 제출 버튼, 삭제 버튼 등 사용자 액션이 필요한 모든 곳에서 사용'
  },
  {
    id: 'checkbox',
    name: '체크박스',
    englishName: 'Checkbox',
    description: '여러 항목을 선택할 수 있는 입력 요소',
    category: 'input',
    difficulty: 'beginner',
    tags: ['선택', '다중선택', '폼'],
    icon: '☑️',
    explanation: '체크박스는 사용자가 여러 옵션 중 하나 이상을 선택할 수 있게 하는 기본 입력 요소입니다. 독립적으로 선택/해제할 수 있습니다.',
    codeExample: `<label class="checkbox-label">
  <input type="checkbox" id="agree" />
  <span>이용약관에 동의합니다</span>
</label>

<div class="checkbox-group">
  <label>
    <input type="checkbox" name="interests" value="music" />
    음악
  </label>
  <label>
    <input type="checkbox" name="interests" value="sports" />
    스포츠
  </label>
</div>`,
    useCase: '약관 동의, 다중 선택 설문, 필터 옵션, 할 일 목록 등에 사용'
  },
  {
    id: 'radio',
    name: '라디오 버튼',
    englishName: 'Radio Button',
    description: '여러 옵션 중 하나만 선택하는 입력 요소',
    category: 'input',
    difficulty: 'beginner',
    tags: ['선택', '단일선택', '폼'],
    icon: '🔘',
    explanation: '라디오 버튼은 여러 옵션 중 하나만 선택할 수 있는 입력 요소입니다. 같은 그룹 내에서는 하나만 선택됩니다.',
    codeExample: `<div class="radio-group">
  <label>
    <input type="radio" name="plan" value="basic" />
    <span>베이직 플랜</span>
  </label>
  <label>
    <input type="radio" name="plan" value="pro" checked />
    <span>프로 플랜</span>
  </label>
  <label>
    <input type="radio" name="plan" value="enterprise" />
    <span>엔터프라이즈 플랜</span>
  </label>
</div>`,
    useCase: '결제 방법 선택, 배송 옵션 선택, 설문조사 답변 등에 사용'
  },
  {
    id: 'toggle',
    name: '토글/스위치',
    englishName: 'Toggle/Switch',
    description: 'ON/OFF 상태를 전환하는 스위치',
    category: 'input',
    difficulty: 'beginner',
    tags: ['토글', '스위치', '상태'],
    icon: '🔄',
    explanation: '토글 스위치는 두 가지 상태(ON/OFF) 간 전환을 직관적으로 표현하는 컴포넌트입니다. 즉시 효과가 적용됩니다.',
    codeExample: `<label class="toggle-switch">
  <input type="checkbox" />
  <span class="slider"></span>
</label>

<style>
  .toggle-switch {
    position: relative;
    width: 50px;
    height: 24px;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    background-color: #ccc;
    border-radius: 24px;
    transition: 0.3s;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  .slider::before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
  }
  
  input:checked + .slider::before {
    transform: translateX(26px);
  }
</style>`,
    useCase: '알림 설정, 다크모드 전환, 기능 활성화/비활성화 등에 사용'
  },
  {
    id: 'search',
    name: '검색창',
    englishName: 'Search Bar',
    description: '검색어를 입력하는 입력 필드',
    category: 'input',
    difficulty: 'beginner',
    tags: ['검색', '입력', '필터'],
    icon: '🔍',
    explanation: '검색창은 사용자가 검색어를 입력하여 콘텐츠를 찾을 수 있게 하는 특수한 입력 필드입니다. 보통 돋보기 아이콘이 포함됩니다.',
    codeExample: `<div class="search-bar">
  <span class="search-icon">🔍</span>
  <input 
    type="search" 
    placeholder="검색어를 입력하세요..."
    class="search-input"
  />
  <button class="clear-button">×</button>
</div>

<style>
  .search-bar {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 24px;
    background: white;
  }
  
  .search-input {
    flex: 1;
    border: none;
    outline: none;
    margin: 0 8px;
  }
</style>`,
    useCase: '웹사이트 검색, 상품 검색, 데이터 필터링, 자동완성 등에 사용'
  },
  {
    id: 'input',
    name: '입력 필드',
    englishName: 'Input Field',
    description: '사용자로부터 텍스트를 입력받는 요소',
    category: 'input',
    difficulty: 'beginner',
    tags: ['입력', '폼', '텍스트'],
    icon: '📝',
    explanation: '입력 필드는 사용자가 텍스트, 숫자, 이메일 등을 입력할 수 있는 기본 폼 요소입니다. placeholder를 통해 입력 가이드를 제공할 수 있습니다.',
    codeExample: `<input 
  type="text" 
  placeholder="이름을 입력하세요"
  class="input-field"
/>`,
    useCase: '로그인 폼, 검색창, 회원가입 폼 등에서 사용자 정보를 수집할 때 사용'
  },
  {
    id: 'card',
    name: '카드',
    englishName: 'Card',
    description: '관련 정보를 그룹화한 컨테이너',
    category: 'layout',
    difficulty: 'beginner',
    tags: ['컨테이너', '레이아웃', '그룹'],
    icon: '🎴',
    explanation: '카드는 관련된 정보를 시각적으로 구분하여 담는 컨테이너입니다. 그림자와 테두리를 활용해 내용을 강조합니다.',
    codeExample: `<div class="card">
  <h3>제목</h3>
  <p>카드 내용이 들어갑니다.</p>
</div>`,
    useCase: '제품 목록, 블로그 포스트, 사용자 프로필 등을 표시할 때 사용'
  },
  {
    id: 'modal',
    name: '모달',
    englishName: 'Modal Dialog',
    description: '화면 위에 떠있는 대화 상자',
    category: 'feedback',
    difficulty: 'intermediate',
    tags: ['팝업', '오버레이', '대화상자'],
    icon: '🪟',
    explanation: '모달은 사용자의 주의를 집중시키기 위해 화면 위에 표시되는 대화 상자입니다. 배경을 어둡게 처리하여 포커스를 유도합니다.',
    codeExample: `<div class="modal">
  <div class="modal-content">
    <h2>알림</h2>
    <p>모달 내용</p>
    <button>닫기</button>
  </div>
</div>`,
    useCase: '중요한 알림, 확인 메시지, 상세 정보 표시, 폼 입력 등에 사용'
  },
  {
    id: 'navbar',
    name: '네비게이션 바',
    englishName: 'Navigation Bar',
    description: '페이지 간 이동을 돕는 메뉴',
    category: 'navigation',
    difficulty: 'beginner',
    tags: ['메뉴', '내비게이션', '링크'],
    icon: '🧭',
    explanation: '네비게이션 바는 웹사이트의 주요 페이지로 이동할 수 있는 링크 모음입니다. 일반적으로 페이지 상단에 고정됩니다.',
    codeExample: `<nav class="navbar">
  <a href="/">홈</a>
  <a href="/about">소개</a>
  <a href="/contact">연락처</a>
</nav>`,
    useCase: '웹사이트 헤더, 메인 메뉴, 사이트맵 등에 사용'
  },
  {
    id: 'dropdown',
    name: '드롭다운',
    englishName: 'Dropdown Menu',
    description: '클릭 시 펼쳐지는 선택 메뉴',
    category: 'input',
    difficulty: 'intermediate',
    tags: ['선택', '메뉴', '옵션'],
    icon: '📋',
    explanation: '드롭다운은 여러 옵션 중 하나를 선택할 수 있는 메뉴입니다. 공간을 절약하면서 많은 선택지를 제공할 수 있습니다.',
    codeExample: `<select class="dropdown">
  <option>옵션 1</option>
  <option>옵션 2</option>
  <option>옵션 3</option>
</select>`,
    useCase: '국가 선택, 카테고리 필터, 정렬 옵션 등에서 사용'
  },
  {
    id: 'alert',
    name: '알림',
    englishName: 'Alert',
    description: '중요한 메시지를 표시하는 요소',
    category: 'feedback',
    difficulty: 'beginner',
    tags: ['메시지', '알림', '피드백'],
    icon: '⚠️',
    explanation: '알림은 사용자에게 중요한 정보나 상태 변화를 알려주는 컴포넌트입니다. 성공, 경고, 에러 등 다양한 타입으로 사용됩니다.',
    codeExample: `<div class="alert success">
  작업이 성공적으로 완료되었습니다!
</div>`,
    useCase: '폼 제출 결과, 에러 메시지, 성공 알림 등에 사용'
  },
  {
    id: 'badge',
    name: '배지',
    englishName: 'Badge',
    description: '상태나 카운트를 표시하는 작은 라벨',
    category: 'display',
    difficulty: 'beginner',
    tags: ['라벨', '상태', '카운트'],
    icon: '🏷️',
    explanation: '배지는 아이템의 상태, 개수, 카테고리 등을 작은 라벨로 표시하는 컴포넌트입니다.',
    codeExample: `<span class="badge">New</span>
<span class="badge count">5</span>`,
    useCase: '알림 개수, 새 항목 표시, 상품 태그 등에 사용'
  },
  {
    id: 'tabs',
    name: '탭',
    englishName: 'Tabs',
    description: '콘텐츠를 섹션별로 나누는 탭 메뉴',
    category: 'navigation',
    difficulty: 'intermediate',
    tags: ['네비게이션', '섹션', '탭'],
    icon: '📑',
    explanation: '탭은 관련된 콘텐츠를 여러 섹션으로 나누어 표시하는 네비게이션 패턴입니다. 공간을 효율적으로 사용할 수 있습니다.',
    codeExample: `<div class="tabs">
  <button class="tab active">탭 1</button>
  <button class="tab">탭 2</button>
</div>`,
    useCase: '설정 페이지, 제품 상세 정보, 대시보드 등에서 콘텐츠 분류에 사용'
  },
  {
    id: 'progress',
    name: '프로그레스 바',
    englishName: 'Progress Bar',
    description: '진행 상태를 시각적으로 표시',
    category: 'feedback',
    difficulty: 'beginner',
    tags: ['진행', '로딩', '상태'],
    icon: '📊',
    explanation: '프로그레스 바는 작업의 진행 상태를 시각적으로 표시하는 컴포넌트입니다. 사용자에게 진행률을 명확히 전달합니다.',
    codeExample: `<div class="progress-bar">
  <div class="progress" style="width: 60%"></div>
</div>`,
    useCase: '파일 업로드, 양식 작성 단계, 학습 진도 등을 표시할 때 사용'
  },
  {
    id: 'slider',
    name: '슬라이더',
    englishName: 'Slider',
    description: '범위 내에서 값을 선택하는 요소',
    category: 'input',
    difficulty: 'intermediate',
    tags: ['범위', '입력', '조절'],
    icon: '🎚️',
    explanation: '슬라이더는 드래그를 통해 특정 범위 내의 값을 선택할 수 있는 입력 요소입니다.',
    codeExample: `<input 
  type="range" 
  min="0" 
  max="100" 
  class="slider"
/>`,
    useCase: '볼륨 조절, 가격 필터, 밝기 설정 등 연속적인 값 선택에 사용'
  },
  {
    id: 'tooltip',
    name: '툴팁',
    englishName: 'Tooltip',
    description: '마우스 오버 시 나타나는 설명',
    category: 'feedback',
    difficulty: 'intermediate',
    tags: ['힌트', '설명', '호버'],
    icon: '💬',
    explanation: '툴팁은 요소에 마우스를 올렸을 때 추가 정보를 제공하는 작은 팝업입니다.',
    codeExample: `<button class="has-tooltip">
  도움말
  <span class="tooltip">추가 설명</span>
</button>`,
    useCase: '아이콘 설명, 추가 정보 제공, 도움말 텍스트 등에 사용'
  },
  {
    id: 'accordion',
    name: '아코디언/접어식',
    englishName: 'Accordion/Collapsible',
    description: '클릭으로 펼치고 접을 수 있는 콘텐츠',
    category: 'layout',
    difficulty: 'intermediate',
    tags: ['펼치기', '접기', '토글'],
    icon: '📂',
    explanation: '아코디언은 콘텐츠를 접었다 펼칠 수 있는 컴포넌트입니다. FAQ, 긴 목록 등을 깔끔하게 정리할 수 있습니다.',
    codeExample: `<div class="accordion">
  <button class="accordion-header">
    질문 1
  </button>
  <div class="accordion-content">
    답변 내용이 들어갑니다.
  </div>
</div>`,
    useCase: 'FAQ 섹션, 설정 메뉴, 상세 정보 표시 등에 사용'
  },
  {
    id: 'pagination',
    name: '페이지네이션',
    englishName: 'Pagination',
    description: '여러 페이지로 나눈 콘텐츠 탐색',
    category: 'navigation',
    difficulty: 'intermediate',
    tags: ['페이지', '탐색', '번호'],
    icon: '📄',
    explanation: '페이지네이션은 많은 콘텐츠를 여러 페이지로 나누고 탐색할 수 있게 해주는 컴포넌트입니다.',
    codeExample: `<div class="pagination">
  <button>◀</button>
  <button class="active">1</button>
  <button>2</button>
  <button>3</button>
  <button>▶</button>
</div>`,
    useCase: '검색 결과, 게시판, 상품 목록 등 많은 데이터를 페이지별로 표시할 때 사용'
  },
  {
    id: 'stepper',
    name: '단계 진행(마법사)',
    englishName: 'Stepper/Wizard',
    description: '여러 단계로 나눈 작업 진행 표시',
    category: 'navigation',
    difficulty: 'advanced',
    tags: ['단계', '진행', '마법사'],
    icon: '🚶',
    explanation: '스테퍼는 복잡한 작업을 여러 단계로 나누어 진행 상황을 시각적으로 보여주는 컴포넌트입니다.',
    codeExample: `<div class="stepper">
  <div class="step completed">1. 정보입력</div>
  <div class="step active">2. 확인</div>
  <div class="step">3. 완료</div>
</div>`,
    useCase: '회원가입 절차, 결제 프로세스, 설문조사 등 다단계 작업에 사용'
  },
  {
    id: 'context-menu',
    name: '컨텍스트 메뉴',
    englishName: 'Context Menu',
    description: '우클릭 시 나타나는 메뉴',
    category: 'navigation',
    difficulty: 'advanced',
    tags: ['우클릭', '메뉴', '옵션'],
    icon: '🖱️',
    explanation: '컨텍스트 메뉴는 요소를 우클릭했을 때 나타나는 맥락 기반 메뉴입니다.',
    codeExample: `<div class="context-menu-trigger">
  우클릭하세요
  <div class="context-menu">
    <div>복사</div>
    <div>붙여넣기</div>
    <div>삭제</div>
  </div>
</div>`,
    useCase: '파일 관리자, 텍스트 에디터, 대시보드 등에서 빠른 작업 실행에 사용'
  },
  {
    id: 'drawer',
    name: '드로어/패널',
    englishName: 'Drawer/Side Panel',
    description: '화면 측면에서 나타나는 패널',
    category: 'layout',
    difficulty: 'intermediate',
    tags: ['사이드바', '패널', '슬라이드'],
    icon: '📱',
    explanation: '드로어는 화면 측면에서 슬라이드되어 나타나는 패널로, 추가 콘텐츠나 메뉴를 제공합니다.',
    codeExample: `<div class="drawer">
  <div class="drawer-content">
    <h3>메뉴</h3>
    <nav>항목 구성</nav>
  </div>
</div>`,
    useCase: '모바일 메뉴, 필터 옵션, 상세 정보 패널 등에 사용'
  },
  {
    id: 'popover',
    name: '팝오버',
    englishName: 'Popover',
    description: '클릭 시 나타나는 작은 팝업',
    category: 'feedback',
    difficulty: 'intermediate',
    tags: ['팝업', '오버레이', '정보'],
    icon: '💭',
    explanation: '팝오버는 특정 요소를 클릭했을 때 관련 정보를 표시하는 작은 팝업입니다.',
    codeExample: `<button class="popover-trigger">
  클릭
  <div class="popover">
    <h4>제목</h4>
    <p>상세 정보</p>
  </div>
</button>`,
    useCase: '추가 정보 표시, 간단한 폼, 선택 옵션 등에 사용'
  },
  {
    id: 'toast',
    name: '스낵바/토스트',
    englishName: 'Snackbar/Toast',
    description: '일시적으로 나타나는 알림 메시지',
    category: 'feedback',
    difficulty: 'intermediate',
    tags: ['알림', '메시지', '피드백'],
    icon: '🍞',
    explanation: '토스트는 화면 하단이나 상단에 잠깐 나타났다 사라지는 알림 메시지입니다.',
    codeExample: `<div class="toast">
  <p>저장되었습니다!</p>
</div>`,
    useCase: '작업 완료 알림, 에러 메시지, 임시 정보 표시 등에 사용'
  },
  {
    id: 'spinner',
    name: '로딩 스피너',
    englishName: 'Spinner/Loader',
    description: '로딩 상태를 표시하는 애니메이션',
    category: 'feedback',
    difficulty: 'beginner',
    tags: ['로딩', '대기', '스피너'],
    icon: '⏳',
    explanation: '스피너는 데이터 로딩이나 처리 중임을 나타내는 회전 애니메이션입니다.',
    codeExample: `<div class="spinner">
  <div class="spinner-circle"></div>
</div>`,
    useCase: '데이터 로딩, API 요청 대기, 페이지 전환 시 사용'
  },
  {
    id: 'skeleton',
    name: '스켈레톤',
    englishName: 'Skeleton',
    description: '콘텐츠 로딩 시 표시되는 플레이스홀더',
    category: 'feedback',
    difficulty: 'beginner',
    tags: ['로딩', '플레이스홀더', '대기'],
    icon: '💀',
    explanation: '스켈레톤은 실제 콘텐츠가 로딩되는 동안 보여주는 회색 박스 애니메이션입니다.',
    codeExample: `<div class="skeleton">
  <div class="skeleton-line"></div>
  <div class="skeleton-line"></div>
  <div class="skeleton-line short"></div>
</div>`,
    useCase: '피드 로딩, 프로필 로딩, 리스트 로딩 등에 사용'
  },
  {
    id: 'table',
    name: '표',
    englishName: 'Table',
    description: '행과 열로 데이터를 정리한 표',
    category: 'display',
    difficulty: 'intermediate',
    tags: ['데이터', '행', '열'],
    icon: '📊',
    explanation: '테이블은 구조화된 데이터를 행과 열로 정리하여 보여주는 컴포넌트입니다.',
    codeExample: `<table class="data-table">
  <thead>
    <tr>
      <th>이름</th>
      <th>나이</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>홍길동</td>
      <td>25</td>
    </tr>
  </tbody>
</table>`,
    useCase: '데이터 목록, 가격표, 비교표, 대시보드 등에 사용'
  },
  {
    id: 'list-item',
    name: '리스트 아이템',
    englishName: 'List Item',
    description: '목록의 개별 항목',
    category: 'display',
    difficulty: 'beginner',
    tags: ['목록', '항목', '리스트'],
    icon: '📝',
    explanation: '리스트 아이템은 반복되는 항목들을 목록 형태로 표시하는 기본 컴포넌트입니다.',
    codeExample: `<ul class="list">
  <li class="list-item">
    <img src="avatar.jpg" />
    <div>
      <h4>제목</h4>
      <p>설명</p>
    </div>
  </li>
</ul>`,
    useCase: '연락처 목록, 메시지 목록, 설정 항목, 검색 결과 등에 사용'
  },
  {
    id: 'bottom-nav',
    name: '탭 바 / 바텀 네비게이션',
    englishName: 'Tab Bar / Bottom Navigation',
    description: '하단에 고정된 네비게이션 바',
    category: 'navigation',
    difficulty: 'intermediate',
    tags: ['네비게이션', '탭', '하단바'],
    icon: '📱',
    explanation: '바텀 네비게이션은 모바일 앱에서 주요 화면 간 이동을 위해 화면 하단에 고정되는 네비게이션 바입니다.',
    codeExample: `<nav class="bottom-nav">
  <a href="#" class="nav-item active">
    <span class="icon">🏠</span>
    <span>홈</span>
  </a>
  <a href="#" class="nav-item">
    <span class="icon">🔍</span>
    <span>검색</span>
  </a>
  <a href="#" class="nav-item">
    <span class="icon">👤</span>
    <span>프로필</span>
  </a>
</nav>`,
    useCase: '모바일 앱의 주요 네비게이션, 3-5개의 주요 화면 간 전환에 사용'
  },
  {
    id: 'chart',
    name: '차트 컴포넌트',
    englishName: 'Chart Component',
    description: '데이터를 시각적으로 표현하는 그래프',
    category: 'display',
    difficulty: 'advanced',
    tags: ['데이터', '그래프', '시각화'],
    icon: '📊',
    explanation: '차트는 데이터를 시각적으로 표현하여 이해하기 쉽게 만드는 컴포넌트입니다. 막대, 선, 원형 등 다양한 형태가 있습니다.',
    codeExample: `<div class="chart-container">
  <canvas id="myChart"></canvas>
  <script>
    // Chart.js 또는 다른 라이브러리 사용
    new Chart('myChart', {
      type: 'bar',
      data: {...}
    });
  </script>
</div>`,
    useCase: '대시보드, 분석 리포트, 통계 데이터 시각화 등에 사용'
  },
  {
    id: 'multi-select',
    name: '멀티셀렉트',
    englishName: 'Multi-select',
    description: '여러 항목을 동시에 선택할 수 있는 선택 메뉴',
    category: 'input',
    difficulty: 'intermediate',
    tags: ['선택', '다중선택', '필터'],
    icon: '☑️',
    explanation: '멀티셀렉트는 드롭다운에서 여러 항목을 동시에 선택할 수 있는 입력 컴포넌트입니다. 태그 형태로 선택된 항목을 표시합니다.',
    codeExample: `<div class="multi-select">
  <div class="selected-items">
    <span class="tag">항목 1 ×</span>
    <span class="tag">항목 2 ×</span>
  </div>
  <div class="dropdown-list">
    <label><input type="checkbox" checked> 항목 1</label>
    <label><input type="checkbox" checked> 항목 2</label>
    <label><input type="checkbox"> 항목 3</label>
  </div>
</div>`,
    useCase: '필터링, 카테고리 선택, 태그 선택, 권한 설정 등에 사용'
  },
  {
    id: 'file-upload',
    name: '파일 업로드 미리보기',
    englishName: 'File Upload Preview',
    description: '파일을 업로드하고 미리보기를 제공하는 컴포넌트',
    category: 'input',
    difficulty: 'intermediate',
    tags: ['파일', '업로드', '미리보기'],
    icon: '📎',
    explanation: '파일 업로드 컴포넌트는 사용자가 파일을 선택하고 업로드 전 미리보기를 제공합니다. 드래그 앤 드롭도 지원합니다.',
    codeExample: `<div class="file-upload">
  <input type="file" id="file" accept="image/*" />
  <label for="file" class="upload-area">
    <span>파일을 드래그하거나 클릭하세요</span>
  </label>
  <div class="preview">
    <img src="preview.jpg" alt="미리보기" />
  </div>
</div>`,
    useCase: '프로필 사진 업로드, 문서 첨부, 이미지 갤러리 등에 사용'
  },
  {
    id: 'fab',
    name: '플로팅 액션 버튼',
    englishName: 'Floating Action Button (FAB)',
    description: '화면에 떠있는 주요 액션 버튼',
    category: 'input',
    difficulty: 'intermediate',
    tags: ['버튼', '플로팅', '액션'],
    icon: '➕',
    explanation: '플로팅 액션 버튼은 화면 위에 떠있는 원형 버튼으로, 페이지의 주요 액션을 강조합니다.',
    codeExample: `<button class="fab">
  <span class="icon">+</span>
</button>

<style>
  .fab {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
</style>`,
    useCase: '새 항목 추가, 글쓰기, 주요 액션 실행 등에 사용'
  },
  {
    id: 'bottom-sheet',
    name: '바텀 시트',
    englishName: 'Bottom Sheet',
    description: '화면 하단에서 올라오는 패널',
    category: 'layout',
    difficulty: 'intermediate',
    tags: ['패널', '모바일', '시트'],
    icon: '📄',
    explanation: '바텀 시트는 화면 하단에서 위로 슬라이드되어 나타나는 패널입니다. 모바일에서 추가 옵션이나 정보를 제공할 때 사용됩니다.',
    codeExample: `<div class="bottom-sheet">
  <div class="sheet-handle"></div>
  <div class="sheet-content">
    <h3>옵션</h3>
    <ul>
      <li>공유하기</li>
      <li>저장하기</li>
      <li>신고하기</li>
    </ul>
  </div>
</div>`,
    useCase: '모바일 옵션 메뉴, 공유 기능, 필터 설정, 상세 정보 표시 등에 사용'
  },
  {
    id: 'drag-drop',
    name: '드래그 앤 드롭 정렬',
    englishName: 'Drag & Drop Sorting',
    description: '항목을 드래그하여 순서를 변경하는 기능',
    category: 'input',
    difficulty: 'advanced',
    tags: ['드래그', '정렬', '재정렬'],
    icon: '↕️',
    explanation: '드래그 앤 드롭은 사용자가 항목을 클릭하여 끌어다 놓으면서 순서를 변경할 수 있는 인터랙티브 기능입니다.',
    codeExample: `<ul class="sortable-list">
  <li draggable="true" class="draggable-item">
    <span class="handle">☰</span>
    항목 1
  </li>
  <li draggable="true" class="draggable-item">
    <span class="handle">☰</span>
    항목 2
  </li>
</ul>

<script>
  // 드래그 이벤트 리스너 추가
  items.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
  });
</script>`,
    useCase: '할 일 목록 순서 변경, 우선순위 설정, 사이드바 메뉴 정렬 등에 사용'
  },
  {
    id: 'grid',
    name: '그리드',
    englishName: 'Grid',
    description: '항목을 격자 형태로 배치하는 레이아웃',
    category: 'layout',
    difficulty: 'beginner',
    tags: ['레이아웃', '격자', '배치'],
    icon: '⊞',
    explanation: '그리드는 콘텐츠를 행과 열의 격자 형태로 배치하는 레이아웃 시스템입니다. 반응형 디자인에 매우 유용합니다.',
    codeExample: `<div class="grid">
  <div class="grid-item">항목 1</div>
  <div class="grid-item">항목 2</div>
  <div class="grid-item">항목 3</div>
  <div class="grid-item">항목 4</div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
</style>`,
    useCase: '이미지 갤러리, 상품 목록, 대시보드 위젯, 카드 레이아웃 등에 사용'
  },
  {
    id: 'carousel',
    name: '캐러셀/슬라이드',
    englishName: 'Carousel/Slider',
    description: '여러 콘텐츠를 좌우로 넘기며 볼 수 있는 슬라이드',
    category: 'display',
    difficulty: 'intermediate',
    tags: ['슬라이드', '이미지', '갤러리'],
    icon: '🎠',
    explanation: '캐러셀은 여러 개의 콘텐츠를 좌우로 슬라이드하며 탐색할 수 있는 컴포넌트입니다. 이미지 갤러리나 프로모션 배너에 자주 사용됩니다.',
    codeExample: `<div class="carousel">
  <button class="prev">◀</button>
  <div class="carousel-track">
    <div class="slide active">
      <img src="image1.jpg" alt="슬라이드 1" />
    </div>
    <div class="slide">
      <img src="image2.jpg" alt="슬라이드 2" />
    </div>
    <div class="slide">
      <img src="image3.jpg" alt="슬라이드 3" />
    </div>
  </div>
  <button class="next">▶</button>
  <div class="indicators">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>`,
    useCase: '이미지 갤러리, 프로모션 배너, 제품 사진, 튜토리얼 슬라이드 등에 사용'
  },
  {
    id: 'motion-design',
    name: '모션 디자인',
    englishName: 'Motion Design',
    description: '애니메이션과 전환 효과를 통한 시각적 피드백',
    category: 'feedback',
    difficulty: 'intermediate',
    tags: ['애니메이션', '전환', '효과'],
    icon: '✨',
    explanation: '모션 디자인은 UI 요소에 애니메이션과 전환 효과를 적용하여 더 생동감 있고 직관적인 사용자 경험을 제공합니다.',
    codeExample: `<div class="animated-element">
  클릭하세요
</div>

<style>
  .animated-element {
    transition: all 0.3s ease;
  }
  
  .animated-element:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .fade-in {
    animation: fadeIn 0.5s ease;
  }
</style>`,
    useCase: '버튼 호버 효과, 페이지 전환, 모달 등장, 리스트 아이템 애니메이션 등에 사용'
  },
  {
    id: 'microinteraction',
    name: '마이크로인터랙션',
    englishName: 'Microinteraction',
    description: '작고 세밀한 상호작용 피드백',
    category: 'feedback',
    difficulty: 'intermediate',
    tags: ['인터랙션', '피드백', '애니메이션'],
    icon: '💫',
    explanation: '마이크로인터랙션은 버튼 클릭, 좋아요, 스위치 토글 등 작은 동작에 즉각적인 시각적 피드백을 제공합니다.',
    codeExample: `<button class="like-button">
  <span class="heart">♡</span>
</button>

<style>
  .like-button.active .heart {
    animation: heartbeat 0.3s ease;
    color: red;
  }
  
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.3); }
    50% { transform: scale(1.1); }
  }
  
  .ripple {
    position: relative;
    overflow: hidden;
  }
  
  .ripple::after {
    content: '';
    position: absolute;
    background: rgba(255,255,255,0.5);
    border-radius: 50%;
    animation: ripple-effect 0.6s;
  }
</style>`,
    useCase: '좋아요 버튼, 체크박스 체크, 스위치 토글, 버튼 클릭 효과 등에 사용'
  },
  {
    id: 'responsive-layout',
    name: '반응형 레이아웃',
    englishName: 'Responsive Layout',
    description: '화면 크기에 따라 자동으로 조정되는 레이아웃',
    category: 'layout',
    difficulty: 'intermediate',
    tags: ['반응형', '적응형', '모바일'],
    icon: '📱',
    explanation: '반응형 레이아웃은 다양한 화면 크기(데스크톱, 태블릿, 모바일)에 맞춰 자동으로 UI가 재배치되고 크기가 조정됩니다.',
    codeExample: `<div class="responsive-container">
  <div class="responsive-grid">
    <div class="item">항목 1</div>
    <div class="item">항목 2</div>
    <div class="item">항목 3</div>
  </div>
</div>

<style>
  .responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    .responsive-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (min-width: 1024px) {
    .responsive-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>`,
    useCase: '웹사이트 전체 레이아웃, 카드 그리드, 네비게이션 메뉴 등에 사용'
  },
  {
    id: 'gesture-ui',
    name: '제스처 UI',
    englishName: 'Gesture UI',
    description: '스와이프, 핀치 등 터치 제스처로 제어하는 인터페이스',
    category: 'navigation',
    difficulty: 'advanced',
    tags: ['제스처', '터치', '모바일'],
    icon: '👆',
    explanation: '제스처 UI는 스와이프, 핀치, 롱프레스 등의 터치 제스처를 활용하여 직관적인 모바일 인터랙션을 제공합니다.',
    codeExample: `<div class="swipeable-card">
  <div class="card-content">
    스와이프 가능한 카드
  </div>
</div>

<script>
  let startX = 0;
  const card = document.querySelector('.swipeable-card');
  
  card.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  
  card.addEventListener('touchmove', (e) => {
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    card.style.transform = \`translateX(\${diff}px)\`;
  });
  
  card.addEventListener('touchend', (e) => {
    const threshold = 100;
    const diff = e.changedTouches[0].clientX - startX;
    
    if (Math.abs(diff) > threshold) {
      // 스와이프 액션 실행
      handleSwipe(diff > 0 ? 'right' : 'left');
    } else {
      // 원위치
      card.style.transform = 'translateX(0)';
    }
  });
</script>`,
    useCase: '카드 스와이프 삭제, 이미지 갤러리, 탭 전환, 핀치 줌 등에 사용'
  },
  {
    id: 'divider',
    name: '구분선',
    englishName: 'Divider',
    description: '콘텐츠를 시각적으로 구분하는 선',
    category: 'layout',
    difficulty: 'beginner',
    tags: ['구분', '선', '분리'],
    icon: '─',
    explanation: '구분선은 콘텐츠나 섹션을 시각적으로 분리하는 얇은 선입니다. 수평 또는 수직으로 사용할 수 있습니다.',
    codeExample: `<div class="content">
  <p>섹션 1</p>
  <hr class="divider" />
  <p>섹션 2</p>
</div>

<!-- 텍스트가 있는 구분선 -->
<div class="divider-with-text">
  <span>또는</span>
</div>`,
    useCase: '폼 섹션 구분, 메뉴 항목 분리, 콘텐츠 영역 나누기 등에 사용'
  },
  {
    id: 'avatar',
    name: '아바타',
    englishName: 'Avatar',
    description: '사용자 프로필 이미지를 표시하는 원형 또는 사각형 요소',
    category: 'display',
    difficulty: 'beginner',
    tags: ['프로필', '이미지', '사용자'],
    icon: '👤',
    explanation: '아바타는 사용자의 프로필 사진이나 이니셜을 표시하는 컴포넌트입니다. 다양한 크기와 상태(온라인, 오프라인)를 지원합니다.',
    codeExample: `<div class="avatar">
  <img src="user.jpg" alt="사용자" />
  <span class="status-indicator online"></span>
</div>

<!-- 이니셜 아바타 -->
<div class="avatar avatar-text">
  <span>홍길</span>
</div>`,
    useCase: '사용자 프로필, 댓글 시스템, 채팅 앱, 작성자 표시 등에 사용'
  },
  {
    id: 'chip',
    name: '칩/태그',
    englishName: 'Chip/Tag',
    description: '작고 간결한 정보 표시 요소',
    category: 'display',
    difficulty: 'beginner',
    tags: ['태그', '칩', '라벨'],
    icon: '🏷️',
    explanation: '칩은 작고 상호작용 가능한 요소로, 선택, 필터링, 또는 간단한 정보를 표시합니다. 삭제 버튼을 포함할 수 있습니다.',
    codeExample: `<div class="chip-group">
  <span class="chip">#개발</span>
  <span class="chip">#디자인</span>
  <span class="chip removable">
    #마케팅
    <button class="chip-remove">×</button>
  </span>
</div>`,
    useCase: '태그 입력, 필터 표시, 선택된 항목 표시, 카테고리 표현 등에 사용'
  },
  {
    id: 'infinite-scroll',
    name: '무한 스크롤',
    englishName: 'Infinite Scroll',
    description: '스크롤 시 자동으로 콘텐츠를 로드하는 기능',
    category: 'navigation',
    difficulty: 'advanced',
    tags: ['스크롤', '로딩', '페이징'],
    icon: '🔄',
    explanation: '무한 스크롤은 사용자가 페이지 하단에 도달하면 자동으로 다음 콘텐츠를 로드하는 패턴입니다.',
    codeExample: `<div class="infinite-scroll-container">
  <div class="content-list">
    <!-- 콘텐츠 항목들 -->
  </div>
  <div class="loading-indicator">
    로딩 중...
  </div>
</div>

<script>
  window.addEventListener('scroll', () => {
    if (isNearBottom()) {
      loadMoreContent();
    }
  });
</script>`,
    useCase: '소셜 미디어 피드, 검색 결과, 상품 목록, 뉴스 피드 등에 사용'
  },
  {
    id: 'pull-refresh',
    name: '당겨서 새로고침',
    englishName: 'Pull to Refresh',
    description: '화면을 아래로 당겨 콘텐츠를 새로고침',
    category: 'navigation',
    difficulty: 'advanced',
    tags: ['새로고침', '제스처', '모바일'],
    icon: '⟳',
    explanation: '당겨서 새로고침은 모바일에서 화면을 아래로 당겨 콘텐츠를 갱신하는 인터랙션 패턴입니다.',
    codeExample: `<div class="pull-refresh-container">
  <div class="refresh-indicator">
    <span class="icon">⟳</span>
    <span>당겨서 새로고침</span>
  </div>
  <div class="content">
    <!-- 콘텐츠 -->
  </div>
</div>

<script>
  container.addEventListener('touchstart', handleTouchStart);
  container.addEventListener('touchmove', handleTouchMove);
  container.addEventListener('touchend', handleTouchEnd);
</script>`,
    useCase: '소셜 미디어 앱, 뉴스 앱, 이메일 앱, 피드 업데이트 등에 사용'
  },
  {
    id: 'sticky-header',
    name: '스티키 헤더',
    englishName: 'Sticky Header',
    description: '스크롤 시 상단에 고정되는 헤더',
    category: 'navigation',
    difficulty: 'intermediate',
    tags: ['헤더', '고정', '네비게이션'],
    icon: '📌',
    explanation: '스티키 헤더는 페이지를 스크롤해도 화면 상단에 고정되어 항상 접근 가능한 네비게이션을 제공합니다.',
    codeExample: `<header class="sticky-header">
  <nav>
    <a href="#">홈</a>
    <a href="#">서비스</a>
    <a href="#">문의</a>
  </nav>
</header>

<style>
  .sticky-header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
  }
</style>`,
    useCase: '웹사이트 헤더, 테이블 헤더, 필터 바, 액션 바 등에 사용'
  },
  {
    id: 'focus-states',
    name: '포커스/호버/액티브',
    englishName: 'Focus/Hover/Active',
    description: '사용자 인터랙션에 따른 시각적 상태 변화',
    category: 'feedback',
    difficulty: 'beginner',
    tags: ['상태', '인터랙션', '접근성'],
    icon: '✨',
    explanation: '포커스, 호버, 액티브 상태는 사용자가 요소와 상호작용할 때 시각적 피드백을 제공합니다. 접근성에 중요합니다.',
    codeExample: `<button class="interactive-button">
  버튼
</button>

<style>
  .interactive-button:hover {
    background-color: #eee;
  }
  
  .interactive-button:focus {
    outline: 2px solid blue;
    outline-offset: 2px;
  }
  
  .interactive-button:active {
    transform: scale(0.98);
  }
</style>`,
    useCase: '모든 인터랙티브 요소(버튼, 링크, 입력 필드)의 상태 표시에 사용'
  },
  {
    id: 'disabled-state',
    name: '비활성',
    englishName: 'Disabled',
    description: '비활성화된 요소의 상태 표시',
    category: 'feedback',
    difficulty: 'beginner',
    tags: ['상태', '비활성', '접근성'],
    icon: '🚫',
    explanation: '비활성 상태는 현재 사용할 수 없는 UI 요소를 시각적으로 표시하고 상호작용을 차단합니다.',
    codeExample: `<button disabled class="button-disabled">
  비활성 버튼
</button>

<input type="text" disabled value="수정 불가" />

<style>
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>`,
    useCase: '권한 없는 기능, 로딩 중인 버튼, 조건 미충족 입력 필드 등에 사용'
  },
  {
    id: 'label',
    name: '레이블',
    englishName: 'Label',
    description: '입력 필드나 폼 요소를 설명하는 텍스트',
    category: 'input',
    difficulty: 'beginner',
    tags: ['레이블', '폼', '텍스트'],
    icon: '🏷️',
    explanation: '레이블은 입력 필드나 폼 요소가 무엇을 요구하는지 명확히 설명하는 텍스트입니다. 접근성에 필수적입니다.',
    codeExample: `<div class="form-field">
  <label for="email">이메일</label>
  <input type="email" id="email" />
</div>

<!-- 필수 필드 표시 -->
<label for="name">
  이름 <span class="required">*</span>
</label>`,
    useCase: '모든 폼 입력 필드, 체크박스, 라디오 버튼 등의 설명에 사용'
  },
  {
    id: 'placeholder',
    name: '플레이스홀더',
    englishName: 'Placeholder',
    description: '입력 필드 내 안내 텍스트',
    category: 'input',
    difficulty: 'beginner',
    tags: ['힌트', '안내', '입력'],
    icon: '💭',
    explanation: '플레이스홀더는 입력 필드가 비어있을 때 표시되는 힌트 텍스트로, 입력 형식이나 예시를 제공합니다.',
    codeExample: `<input 
  type="email" 
  placeholder="example@email.com"
  class="input-field"
/>

<textarea 
  placeholder="여기에 메시지를 입력하세요..."
  rows="4"
></textarea>`,
    useCase: '입력 형식 안내, 예시 제공, 입력 가이드 등에 사용'
  },
  {
    id: 'helper-text',
    name: '도우미 문구',
    englishName: 'Helper Text',
    description: '입력 필드 아래 추가 설명 텍스트',
    category: 'feedback',
    difficulty: 'beginner',
    tags: ['도움말', '안내', '설명'],
    icon: '💬',
    explanation: '도우미 문구는 입력 필드 아래에 표시되어 추가 정보, 조건, 또는 안내를 제공합니다.',
    codeExample: `<div class="form-field">
  <label for="password">비밀번호</label>
  <input type="password" id="password" />
  <span class="helper-text">
    최소 8자 이상, 숫자 포함 필수
  </span>
</div>`,
    useCase: '입력 조건 설명, 추가 정보 제공, 사용 방법 안내 등에 사용'
  },
  {
    id: 'validation',
    name: '유효성 검사',
    englishName: 'Validation',
    description: '입력값의 유효성을 검사하고 피드백 제공',
    category: 'feedback',
    difficulty: 'intermediate',
    tags: ['검증', '오류', '피드백'],
    icon: '✓',
    explanation: '유효성 검사는 사용자 입력이 요구사항을 충족하는지 확인하고, 실시간 피드백을 제공합니다.',
    codeExample: `<div class="form-field">
  <label for="email">이메일</label>
  <input 
    type="email" 
    id="email" 
    class="invalid"
    aria-invalid="true"
  />
  <span class="error-message">
    올바른 이메일 형식이 아닙니다
  </span>
</div>

<style>
  .invalid {
    border-color: red;
  }
  .valid {
    border-color: green;
  }
</style>`,
    useCase: '폼 입력 검증, 실시간 피드백, 제출 전 확인 등에 사용'
  },
  {
    id: 'error-success-message',
    name: '오류/성공 메시지',
    englishName: 'Error/Success Message',
    description: '작업 결과를 사용자에게 알리는 메시지',
    category: 'feedback',
    difficulty: 'beginner',
    tags: ['메시지', '알림', '피드백'],
    icon: '⚠️',
    explanation: '오류 또는 성공 메시지는 작업의 결과를 명확하게 전달하여 사용자가 다음 행동을 결정할 수 있게 합니다.',
    codeExample: `<!-- 오류 메시지 -->
<div class="message error">
  <span class="icon">❌</span>
  <span>로그인에 실패했습니다</span>
</div>

<!-- 성공 메시지 -->
<div class="message success">
  <span class="icon">✓</span>
  <span>저장되었습니다</span>
</div>`,
    useCase: '폼 제출 결과, API 응답, 작업 완료/실패 알림 등에 사용'
  },
  {
    id: 'input-mask',
    name: '입력 마스크',
    englishName: 'Input Mask',
    description: '특정 형식으로 입력을 제한하는 기능',
    category: 'input',
    difficulty: 'intermediate',
    tags: ['입력', '형식', '제한'],
    icon: '🎭',
    explanation: '입력 마스크는 전화번호, 날짜, 신용카드 등 특정 형식의 데이터 입력을 자동으로 포맷팅합니다.',
    codeExample: `<input 
  type="tel" 
  placeholder="010-1234-5678"
  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
  class="input-mask"
/>

<script>
  input.addEventListener('input', (e) => {
    // 자동으로 하이픈 추가
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3) {
      value = value.slice(0,3) + '-' + value.slice(3);
    }
    if (value.length > 8) {
      value = value.slice(0,8) + '-' + value.slice(8,12);
    }
    e.target.value = value;
  });
</script>`,
    useCase: '전화번호, 우편번호, 신용카드, 날짜 입력 등 형식이 정해진 데이터 입력에 사용'
  },
  {
    id: 'hamburger-menu',
    name: '햄버거 메뉴',
    englishName: 'Hamburger Menu',
    description: '모바일에서 메뉴를 숨기고 펼치는 아이콘',
    category: 'navigation',
    difficulty: 'intermediate',
    tags: ['메뉴', '모바일', '네비게이션'],
    icon: '☰',
    explanation: '햄버거 메뉴는 제한된 화면 공간에서 네비게이션 메뉴를 숨겼다 표시할 수 있는 아이콘 버튼입니다.',
    codeExample: `<button class="hamburger-menu" aria-label="메뉴">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>

<nav class="mobile-menu hidden">
  <a href="#">홈</a>
  <a href="#">서비스</a>
  <a href="#">문의</a>
</nav>

<script>
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('open');
  });
</script>`,
    useCase: '모바일 네비게이션, 반응형 웹사이트, 사이드바 토글 등에 사용'
  },
  {
    id: 'breadcrumb',
    name: '브레드크럼',
    englishName: 'Breadcrumb',
    description: '현재 페이지 위치를 보여주는 네비게이션',
    category: 'navigation',
    difficulty: 'beginner',
    tags: ['네비게이션', '경로', '위치'],
    icon: '🍞',
    explanation: '브레드크럼은 사용자가 현재 웹사이트 내 어디에 있는지 계층 구조로 보여주고, 상위 페이지로 쉽게 이동할 수 있게 합니다.',
    codeExample: `<nav class="breadcrumb">
  <a href="/">홈</a>
  <span class="separator">›</span>
  <a href="/products">상품</a>
  <span class="separator">›</span>
  <span class="current">노트북</span>
</nav>

<style>
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }
  
  .breadcrumb a {
    color: #0066cc;
    text-decoration: none;
  }
  
  .breadcrumb a:hover {
    text-decoration: underline;
  }
  
  .separator {
    color: #999;
  }
  
  .current {
    color: #333;
    font-weight: 500;
  }
</style>`,
    useCase: '전자상거래 사이트, 문서 사이트, 계층적 콘텐츠 네비게이션 등에 사용'
  },
  {
    id: 'rating',
    name: '평점/별점',
    englishName: 'Rating',
    description: '별점 또는 평점을 표시하거나 입력받는 컴포넌트',
    category: 'input',
    difficulty: 'intermediate',
    tags: ['평점', '별점', '리뷰'],
    icon: '⭐',
    explanation: '평점 컴포넌트는 제품이나 서비스의 품질을 별점으로 표시하거나, 사용자가 평가를 입력할 수 있게 합니다.',
    codeExample: `<div class="rating">
  <input type="radio" id="star5" name="rating" value="5" />
  <label for="star5">★</label>
  <input type="radio" id="star4" name="rating" value="4" />
  <label for="star4">★</label>
  <input type="radio" id="star3" name="rating" value="3" />
  <label for="star3">★</label>
  <input type="radio" id="star2" name="rating" value="2" />
  <label for="star2">★</label>
  <input type="radio" id="star1" name="rating" value="1" />
  <label for="star1">★</label>
</div>

<style>
  .rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
  
  .rating input {
    display: none;
  }
  
  .rating label {
    font-size: 24px;
    color: #ddd;
    cursor: pointer;
  }
  
  .rating label:hover,
  .rating label:hover ~ label,
  .rating input:checked ~ label {
    color: #ffc107;
  }
</style>`,
    useCase: '리뷰 시스템, 상품 평가, 만족도 조사, 콘텐츠 등급 표시 등에 사용'
  },
  {
    id: 'empty-state',
    name: '빈 상태',
    englishName: 'Empty State',
    description: '데이터가 없을 때 표시하는 화면',
    category: 'feedback',
    difficulty: 'beginner',
    tags: ['빈 상태', '데이터 없음', '안내'],
    icon: '📭',
    explanation: '빈 상태는 데이터나 콘텐츠가 없을 때 사용자에게 상황을 설명하고, 다음 행동을 안내하는 화면입니다.',
    codeExample: `<div class="empty-state">
  <div class="empty-icon">📭</div>
  <h3>데이터가 없습니다</h3>
  <p>아직 항목이 추가되지 않았습니다.</p>
  <button class="primary-button">
    첫 항목 추가하기
  </button>
</div>

<style>
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
  }
  
  .empty-icon {
    font-size: 64px;
    margin-bottom: 16px;
  }
  
  .empty-state h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }
  
  .empty-state p {
    color: #666;
    margin-bottom: 24px;
  }
</style>`,
    useCase: '빈 검색 결과, 빈 장바구니, 빈 메시지함, 빈 대시보드 등에 사용'
  },
  {
    id: 'timeline',
    name: '타임라인',
    englishName: 'Timeline',
    description: '시간 순서대로 이벤트를 표시하는 컴포넌트',
    category: 'display',
    difficulty: 'intermediate',
    tags: ['시간', '이벤트', '히스토리'],
    icon: '📅',
    explanation: '타임라인은 이벤트나 활동을 시간 순서대로 시각적으로 표현하여 진행 과정이나 히스토리를 보여줍니다.',
    codeExample: `<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h4>주문 완료</h4>
      <p class="timeline-time">2024-01-15 14:30</p>
      <p>주문이 접수되었습니다.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h4>배송 시작</h4>
      <p class="timeline-time">2024-01-16 09:00</p>
      <p>상품이 배송되었습니다.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-marker active"></div>
    <div class="timeline-content">
      <h4>배송 중</h4>
      <p class="timeline-time">2024-01-17 11:20</p>
      <p>배송 중입니다.</p>
    </div>
  </div>
</div>

<style>
  .timeline {
    position: relative;
    padding-left: 40px;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ddd;
  }
  
  .timeline-marker {
    position: absolute;
    left: 10px;
    width: 12px;
    height: 12px;
    background: #ddd;
    border-radius: 50%;
  }
  
  .timeline-marker.active {
    background: #0066cc;
    box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.2);
  }
</style>`,
    useCase: '주문 추적, 프로젝트 진행 상황, 히스토리 표시, 활동 로그 등에 사용'
  },
  {
    id: 'chat-bubble',
    name: '메시지 버블',
    englishName: 'Chat Bubble/Message',
    description: '채팅이나 메시지를 표시하는 말풍선',
    category: 'display',
    difficulty: 'beginner',
    tags: ['채팅', '메시지', '댓글'],
    icon: '💬',
    explanation: '메시지 버블은 채팅, 댓글, 메시지를 말풍선 형태로 표시하는 컴포넌트입니다. 발신자에 따라 다른 스타일을 적용합니다.',
    codeExample: `<div class="chat-container">
  <!-- 상대방 메시지 -->
  <div class="message-bubble received">
    <div class="message-avatar">👤</div>
    <div class="message-content">
      <div class="message-author">김철수</div>
      <div class="message-text">안녕하세요!</div>
      <div class="message-time">오후 2:30</div>
    </div>
  </div>
  
  <!-- 내 메시지 -->
  <div class="message-bubble sent">
    <div class="message-content">
      <div class="message-text">안녕하세요. 반갑습니다!</div>
      <div class="message-time">오후 2:31</div>
    </div>
  </div>
</div>

<style>
  .message-bubble {
    display: flex;
    margin: 12px 0;
  }
  
  .message-bubble.sent {
    justify-content: flex-end;
  }
  
  .message-bubble.sent .message-content {
    background: #0066cc;
    color: white;
    border-radius: 18px 18px 4px 18px;
  }
  
  .message-bubble.received .message-content {
    background: #f0f0f0;
    border-radius: 18px 18px 18px 4px;
  }
</style>`,
    useCase: '채팅 앱, 메시징 시스템, 댓글 시스템, 고객 지원 채팅 등에 사용'
  },
  {
    id: 'autocomplete',
    name: '자동완성',
    englishName: 'Autocomplete',
    description: '입력 시 자동으로 추천 목록을 보여주는 입력 필드',
    category: 'input',
    difficulty: 'intermediate',
    tags: ['자동완성', '검색', '추천'],
    icon: '🔮',
    explanation: '자동완성은 사용자가 입력하는 동안 관련된 제안을 실시간으로 표시하여 빠르고 정확한 입력을 돕습니다.',
    codeExample: `<div class="autocomplete-container">
  <input 
    type="text" 
    placeholder="검색..."
    class="autocomplete-input"
    id="autocomplete"
  />
  <ul class="autocomplete-suggestions" id="suggestions">
    <li class="suggestion-item">서울특별시</li>
    <li class="suggestion-item">서울역</li>
    <li class="suggestion-item">서울대학교</li>
  </ul>
</div>

<script>
  const input = document.getElementById('autocomplete');
  const suggestions = document.getElementById('suggestions');
  
  input.addEventListener('input', async (e) => {
    const value = e.target.value;
    if (value.length < 2) {
      suggestions.style.display = 'none';
      return;
    }
    
    // API 호출 또는 로컬 필터링
    const results = await fetchSuggestions(value);
    
    suggestions.innerHTML = results
      .map(item => \`<li class="suggestion-item">\${item}</li>\`)
      .join('');
    suggestions.style.display = 'block';
  });
</script>

<style>
  .autocomplete-container {
    position: relative;
  }
  
  .autocomplete-suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    display: none;
  }
  
  .suggestion-item {
    padding: 10px;
    cursor: pointer;
  }
  
  .suggestion-item:hover {
    background: #f0f0f0;
  }
</style>`,
    useCase: '검색창, 주소 입력, 태그 입력, 사용자 멘션 등에 사용'
  },
  {
    id: 'tag-input',
    name: '태그 입력',
    englishName: 'Tag Input',
    description: '태그를 추가하고 삭제할 수 있는 입력 필드',
    category: 'input',
    difficulty: 'intermediate',
    tags: ['태그', '입력', '다중입력'],
    icon: '🏷️',
    explanation: '태그 입력은 사용자가 여러 개의 태그를 입력하고 관리할 수 있는 컴포넌트입니다. 각 태그를 개별적으로 추가/삭제할 수 있습니다.',
    codeExample: `<div class="tag-input-container">
  <div class="tags">
    <span class="tag">
      React
      <button class="tag-remove">×</button>
    </span>
    <span class="tag">
      TypeScript
      <button class="tag-remove">×</button>
    </span>
  </div>
  <input 
    type="text" 
    class="tag-input" 
    placeholder="태그 추가..."
  />
</div>

<script>
  const input = document.querySelector('.tag-input');
  const tagsContainer = document.querySelector('.tags');
  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.innerHTML = \`
        \${input.value}
        <button class="tag-remove">×</button>
      \`;
      
      tag.querySelector('.tag-remove').addEventListener('click', () => {
        tag.remove();
      });
      
      tagsContainer.appendChild(tag);
      input.value = '';
    }
  });
</script>

<style>
  .tag-input-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    background: #e0e0e0;
    border-radius: 16px;
    font-size: 14px;
  }
  
  .tag-remove {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
  }
  
  .tag-input {
    flex: 1;
    border: none;
    outline: none;
    min-width: 120px;
  }
</style>`,
    useCase: '블로그 태그, 키워드 입력, 받는사람 입력, 관심사 선택 등에 사용'
  },
  {
    id: 'back-to-top',
    name: '맨 위로 버튼',
    englishName: 'Back to Top Button',
    description: '페이지 최상단으로 스크롤하는 버튼',
    category: 'navigation',
    difficulty: 'beginner',
    tags: ['스크롤', '네비게이션', '버튼'],
    icon: '⬆️',
    explanation: '맨 위로 버튼은 긴 페이지에서 빠르게 최상단으로 이동할 수 있게 하는 버튼입니다. 스크롤 시 나타납니다.',
    codeExample: `<button id="backToTop" class="back-to-top">
  ⬆
</button>

<script>
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
</script>

<style>
  .back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #0066cc;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .back-to-top:hover {
    background: #0052a3;
    transform: translateY(-4px);
  }
</style>`,
    useCase: '긴 페이지, 블로그 포스트, 문서 페이지, 상품 목록 등에 사용'
  },
  {
    id: 'lightbox',
    name: '이미지 라이트박스',
    englishName: 'Image Lightbox',
    description: '이미지를 전체 화면으로 확대해서 보는 컴포넌트',
    category: 'display',
    difficulty: 'intermediate',
    tags: ['이미지', '갤러리', '확대'],
    icon: '🖼️',
    explanation: '라이트박스는 이미지를 클릭하면 전체 화면 오버레이로 크게 보여주는 컴포넌트입니다. 갤러리 탐색 기능도 포함합니다.',
    codeExample: `<div class="gallery">
  <img src="image1.jpg" class="thumbnail" alt="이미지 1" />
  <img src="image2.jpg" class="thumbnail" alt="이미지 2" />
  <img src="image3.jpg" class="thumbnail" alt="이미지 3" />
</div>

<div class="lightbox" id="lightbox">
  <button class="close-btn">×</button>
  <button class="prev-btn">‹</button>
  <img src="" alt="" class="lightbox-image" />
  <button class="next-btn">›</button>
</div>

<script>
  const thumbnails = document.querySelectorAll('.thumbnail');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  let currentIndex = 0;
  
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      currentIndex = index;
      lightboxImage.src = thumb.src;
      lightbox.style.display = 'flex';
    });
  });
  
  document.querySelector('.close-btn').addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
</script>

<style>
  .lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.9);
    z-index: 9999;
    align-items: center;
    justify-content: center;
  }
  
  .lightbox-image {
    max-width: 90%;
    max-height: 90%;
  }
  
  .close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 40px;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
  }
</style>`,
    useCase: '이미지 갤러리, 포트폴리오, 상품 상세 이미지, 사진 앨범 등에 사용'
  }
];
