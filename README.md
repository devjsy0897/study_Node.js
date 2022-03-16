# study_Node.js

study node.js

<a href="https://www.youtube.com/watch?v=toLDNN4FQv0&t=17s">유투브 노드 기본 - 완료</a>

<a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8/lecture/37064?tab=curriculum">인프런 노드-리액트 기본</a>      
  
<a href="https://askforyou.tistory.com/19?category=997470">모듈을 이용한 node.js</a>

<h3>MEMO</h3>
<p>
1. npm init : 프로젝트 생성
2. index.js 생성<br>
3. npm install express --save : express 설치<br>
4. index.js에서 require expess 해주고 port번호 지정 등 세팅함<br>
5. npm install body-parser --save : 클라이언트 POST request data의 body로부터 파라미터를 가져오게 함<br>
6. index.js에 require body-parser 등 필요한 코드 입력<br>
7. npm install nodemon --save-dev : 소스를 변경할 때 감지해 자동으로 서버를 재 시작해주는 tool<br>
8. npm install -s express-session : session을 사용할 때 필요한 패키지 설치<br>
</p>
<p>
Module <br>
  routes > controllers > services<br>
  - routes : 라우팅 정보를 가집니다.<br>
  - controllers : 라우팅 정보에 의해 전달된 처리를 하는 로직입니다.<br>
  - services : controller에서 전달된 정보에 의해서 DB 처리 등을 담당합니다.<br>
  <a href="https://askforyou.tistory.com/19?category=887470">참고 블로그</a>
</p>
