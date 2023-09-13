1. 태그 / 버저닝

   > git tag .01

2. Develop 기능 개발을 위한 브런치 생성

   > develop work3

3. 기능 개발이 끝나고 새 버전 배포 준비를 위한 릴리즈 브런치 생성

   > release => develop 브런치에서 release/버전 브런치를 생성

4. 릴리즈 준비 과정 중 버그 발생 버그픽스를 해야하는 상황

   > 버그픽스

5. 릴리즈 브런치를 디벨롭에 머지하기

   > 디벨롭 브런치에서 릴리즈 브런치를 머지한다.
   > on develop: git merge release/0.2

6. 마스터 브런치에서 릴리즈 브런치를 머지하는데 이때, 커밋내용을 남기기 위해서 fast forward 옵션을 꺼야한다.

   > on master: git merge --no-ff release/0.2

7. 릴리즈 병합 후 버그 픽스
