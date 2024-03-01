import { FaHtml5, FaJsSquare, FaReact, FaGitSquare } from "react-icons/fa";

const skillsData = {
  skillList: [
    {
      label: "HTML/CSS",
      detail: [
        "시멘틱 태그들을 이해하고 활용할 수 있습니다.",
        "원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.",
        "Css 최신 문법이 숙지되어 있고 Css 프리프로세서 Sass를 사용할 수 있습니다.",
      ],
      icon: <FaHtml5 />,
    },
    {
      label: "Javascript/Typescript",
      detail: [
        "ES6와 이후의 자바스크립트 문법을 사용할 수 있습니다.",
        "Vanilla JS의 웹 제작이 가능하고 필요 이유에 대해 충분히 이해하고 있습니다.",
        "타입에 대한 이해를 하고 있고, 인터페이스의 사용이 가능합니다.",
      ],
      icon: <FaJsSquare />,
    },
    {
      label: "React",
      detail: [
        "컴포넌트 생명주기와 속성을 사용할 수 있습니다.",
        "class, function 컴포넌트의 차이를 이해하고 있으며 구분하여 사용할 수 있습니다.",
        "리덕스를 사용하여 상태관리를 할 수 있습니다.",
      ],
      icon: <FaReact />,
    },
    {
      label: "Git/Github",
      detail: [
        "깃과 깃헙을 사용하여 다른 개발자들과 협업을 할 수 있습니다.",
        "깃을 통한 커밋 관리 경험이 있습니다.",
        "git flow가 무엇인지 알고 있으며 왜 사용해야 하는지 이해하고 있습니다.",
      ],
      icon: <FaGitSquare />,
    },
  ],

  experienceList: [
    {
      period: "2020.06 - 2021.06",
      position: "web designer",
      company: "Orange Communication",
      explain:
        "웹 에이전시 오렌지커뮤니케이션에서 웹 디자인 및 퍼블리싱 작업을 담당하였습니다. 포토샵을 활용하여 디자인 작업을 하였고, php를 기반으로 개발된 솔루션을 활용하여 웹 사이트를 제작 및 유지, 보수를 하였습니다.",
    },
  ],

  educationList: [
    {
      period: "2023.09 - 2023.11",
      position: "리액트(React.js) 자바스크립트",
      company: "이젠 아카데미 DX교육센터",
      explain:
        "React.JS의 편리한 반응형 렌더링과 상태를 관리하는 함수 컴포넌트 개발 기술을 습득하였습니다. Vitual DOM을 활용한 렌더링의 효율성을 위한 최적화를 하기 위하여 노력했습니다.",
    },
    {
      period: "2021.08 - 2022.02",
      position: "디지털 컨버전스 융합 SW개발자 양성과정",
      company: "한국스마트정보교육원",
      explain:
        "자바스크립트, 자바 언어를 중심으로 풀스텍 과정을 학습하였습니다. My-Sql 활용하여 데이터의 처리와 분석능력을 배웠고, Spring Boot, HeidiSql을 이용하여 팀 프로젝트를 진행하였습니다. ",
    },
    {
      period: "2019.10 - 2020.04",
      position: "코딩을 활용한 디지털 웹디자인",
      company: "이젠 컴퓨터 아트 서비스 학원",
      explain:
        "포토샵, 일러스트 툴을 활용하여 웹 디자인을 공부하였습니다. HTML, CSS, 자바스크립트로 UI 구현 표준을 수립하고 UI를 제작하는 법을 학습하였습니다.",
    },
  ],
};

export default skillsData;
