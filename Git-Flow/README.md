# git-practice

<img src="https://techblog.woowahan.com/wp-content/uploads/img/2017-10-30/git-flow_overall_graph.png"  width="700" height="700">

원문 https://techblog.woowahan.com/2553/

# 왜 해야하나?

사실 원문 자체도 17년에 작성 된 글이라 5년이상 지났지만 너무나도 잘 작성 된 글이라고 생각되고 지금에도 이 개념을 사용하고 있을만큼 잘 작성된 글인거 같아서 기본서 같은 개념으로 접근을 해보려고 합니다. 혼자 프로젝트를 담당하고 기능 단위로 브런치를 나눠서 작업하지 않는다면 Git Flow 을 몰라도 되고 Git 을 효율적으로 사용하고 있다고 보기도 힘듭니다.

## 브런치 종류 알아보기

- master : 실제 운영되는 프로덕트 브런치
- develop : 다음 출시 버전을 개발하는 브런치
- feature : 기능 개발 브런치
- release : 이번에 출시를 준비하는 브런치
- hotfix : 출시 버전에서 생긴 버그를 수정하는 브런치

## 실습하기

- Master 브랜치 Develop 생성
- Develop 브랜치에서 기능 단위 개발은 Feature 브랜치 생성
- Feature 가 끝난 작업들은 Develop 으로 머지
  - 머지시에 `머지 커밋`을 남겨야하므로 no fast forward 옵션을 사용한다.
  - develop) git merge --no-ff feat/~~
- 개발이 끝난 Develop 브랜치는 Release 브런치를 생성
  - Release 브랜치는 태그를 붙여준다. ex) Release/1.0
- Release 브랜치에서배포 전에 버그를 잡는 QA 를 진행하면서 버그를 픽스한다.
- 배포를 위해 Master 브런치로 병합을 해준다.
  - master) git merge release/1.0 이때는 머지커밋을 남기지 않는다.
- release 브랜치의 버그 픽스가 develop 브랜치에 반영되어야하기 때문에 develop 에도 merge 를 해준다.
  - develop) git merge release/1.0
- Master 브랜치에 출시 버전(최신 릴리즈 브랜치의 버전)이 머지되었다면 태그를 릴리즈 버전에 맞춰준다.
  - git tag 1.0
- Master 브랜치에서 prod 버전을 배포했는데 실서버에 QA 에서 못보던 버그가 발생한 상황라면?

  - hotfix/1.1 의 브랜치를 만들어준다.
  - 코드 수정 후 핫픽스 브랜치는 마스터로 병합하면서 develop 에도 병합해준다. 이때도 `머지 커밋을` 남긴다.
  - master) git merge hotfix/1.1
  - develop) git merge hotfix/1.1

- 이렇게 한 개발부터 배포까지의 한 사이클이 끝이 났다.

- 다음 배포를 위해 다시 Develop 으로 돌아가서 기능 단위 개발을 한다. git checkout -b feat/~~~
- 이번에도 개발이 끝나면 develop 머지를 한다.
  - develop) git merge --no-ff feat/~~
- 이제 배포를 위해 release/2.0 브랜치를 생성한다.
- qa 진행 후 release 브랜치를 master 와 develop 에 각각 병합한다.
- master 에는 배포 버전을 기록한다. git tag 2.0
- 운영 중에 혹시라도 버그가 생기면 hotfix 브랜치로 처리하고 develop 과 master 에 병합해준다.

### 특징

master 는 기둥과 같다 절대 변하면 안된다. 마찬가지로 Develop 또한 항상 존재하면 브랜치가 어디에도 병합되지 않으며 release 의 변경사항이나 hotfix 의 변경사항을 항상 master 와 같이 최산상태로 유지되는 특징이 있다.
