import React from "react";
import { Button } from "react-bootstrap";
const { Kakao } = window;

const KakaoShareButton = () => {
  const url = "https://cat-mbti-jeong.netlify.app/";
  const resultUrl = window.location.href;

  console.log("ddd", resultUrl, url);

  React.useEffect(() => {
    Kakao.cleanup();
    Kakao.init("76a27ef7b1de116a3abf59841429dde1");
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description:
          "예비 집사님이 고양이를 키운다면 가장 잘 맞는 고양이는 아비시니안입니다.",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <Button
      onClick={shareKakao}
      style={{ fontFamily: "휴먼범석체", width: 130, marginLeft: "20px" }}
    >
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
