### 텍스트 더보기 만들기 / scrollHeight clientHeight / line-clamp 에 대한 정보


#### styled-components 와 useRef useEffect hooks 를 사용하여 텍스트가 길어졌을 때,
#### 너무 길어서 보기 좋지 않은 상황에 쓰일 수 있도록 텍스트 커스텀 컴포넌트를 만들어봤다.


1. useRef를 통해 textRef 의 scrollHeight 을 체크하고 scrollHeight > clientHeight 이면, line-clamp 가 적용된 것으로 볼 수 있다.
2. 체크 후 더보기를 넣어준다. ( 줄이기도 요구 사항에 맞게 추가 )

```javascript

function TextMore({ children }) {
  const [moreText, setMoreText] = useState(false);
  const [overFlow, setOverFlow] = useState(false);
  const textRef = useRef();
  // resize 될 때,
  // 새로 렌더링 => 화면 확대 / 축소시 더보기 버튼 생성/삭제 위해
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const [lines, setLines] = useState(0);
  // offsetHeight => line-height 23px 기준 = 1줄
  // 4줄 이상부터 더보기 보여주기 => 23 * 4 => 92px
  useEffect(() => {
    setOverFlow(false);
    const rows = textRef.current.offsetHeight / 23;

    const scrollHeight = textRef.current.scrollHeight;
    const clientHeight = textRef.current.clientHeight;
    if (scrollHeight > clientHeight) {
      setOverFlow(true);
    }
    setLines(rows);
  }, [width]);

  return (
    <TextContainer>
      <Text
        ref={textRef}
        more={moreText}
      >
        {children}
      </Text>
      {overFlow && !moreText && lines >= 2 ? (
        <MoreButton
          onClick={() => setMoreText(true)}
        >
          더보기
        </MoreButton>
      ) : null}
      {overFlow && moreText && lines >= 2 ? (
        <MoreButton
          onClick={() => setMoreText(false)}
        >
          줄이기
        </MoreButton>
      ) : null}
    </TextContainer>
  );
}

```