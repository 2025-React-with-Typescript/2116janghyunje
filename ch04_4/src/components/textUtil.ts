// 기본 세팅된 클래스에 추가 클래스를 추가해주는 함수.
// setting - Title, Subtitle 등에 기본 설정된 클래스
// _className - 사용자가 추가로 설정한 클래스
// numberOfLines ->
// class='line-clmap-1', class = 'line-clmap-2' 와 같이 줄 수 클래스 이름을
// numberOfLines={1}, numberOfLines={2} 와 같이 사용할 수 있게 지원해준다.
export const makeClassName = (
    setting: string,
    _className?: string,
    numberOfLines?: number
  ) =>
    [
      setting,
      numberOfLines ? `line-clamp-${numberOfLines}` : "",
      _className,
    ].join(" ");
  