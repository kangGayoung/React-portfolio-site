import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main className="main_wrap">
        <div className="main_left">
          <div className="color_box"></div>
          <div className="img_box"></div>
        </div>
        <div className="main_right">
          <div className="intro_box">
            <h2>Hello~!</h2>
            <h1>
              I'M
              <ul>
                <li>KANG GA YOUNG</li>
                <li>Front-end Developer</li>
              </ul>
            </h1>
            <p>
              안녕하세요!! 저는 강가영입니다.
              <br /> 맡은 일에 책임감을 가지고 일하며, 새로운 기술에 관심이
              많습니다.
              <br /> 현재 프론트엔트 개발자로 구직중입니다.
            </p>
          </div>
          <section>
            <h2>PERSONAL INFOS</h2>
            <ul>
              <li>
                <span>Name : </span>강가영
              </li>
              <li>
                <span>Phone : </span>010.5814.5054
              </li>
              <li>
                <span>Address : </span>서울시 관악구 신림동
              </li>
              <li>
                <span>Email : </span>gangga9011@gmail.com
              </li>
            </ul>
          </section>
          <Link to="/about">
            <button className="more-btn">MORE ABOUT ME</button>
          </Link>
        </div>
      </main>
    </>
  );
}
