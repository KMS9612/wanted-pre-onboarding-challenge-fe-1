export default function TodoListPresenter(props: any) {
  return (
    <div>
      <div></div>
      <div>
        {props.List?.map((el: any, index: any) => (
          <div key={index}>
            제목 :{el.title}
            내용 :{el.content}
          </div>
        ))}
      </div>
    </div>
  );
}
