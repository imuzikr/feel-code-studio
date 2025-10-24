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
  }
];
