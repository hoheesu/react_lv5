[🔗 배포사이트](https://react-lv5.vercel.app/todo/list)
 - JSON-SERVER -> 글리치로 배포


| 기능        | URL        | Method | Request                  | Response                                                        |
|-------------|------------|--------|--------------------------|-----------------------------------------------------------------|
| todo 전체 조회 | /todos     | GET    | -                        | ```json [{"title": "제목1", "content": "내용1", "id": 1}, {"title": "제목2", "content": "내용2", "id": 2}] ``` |
| todo 추가     | /todos     | POST   | ```json { "title": "제목", "content": "내용" }``` | ```json { "title": "제목", "content": "내용", "id": 3 }```        |
| todo 디테일   | /todos/:id | GET    | -                        | ```json { "title": "제목", "content": "내용", "id": 1 }```         |
| todo 수정     | /todos/:id | PATCH  | ```json { "title": "제목 수정", "content": "내용 수정" }``` | ```json { "title": "제목 수정", "content": "내용 수정", "id": 2 }``` |
| todo 삭제     | /todos/:id | DELETE | -                        | -                                                               |
