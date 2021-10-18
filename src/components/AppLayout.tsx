import styled from '@emotion/styled';
import Link from 'next/link';
import React , {FC} from 'react';

const AppLayout:FC = ({ children }) => {
  return (
    <div>
        <Header>
            <div className="inner">
                <Signiture>
                    <Link href="/"><a>CONIMAL</a></Link>
                </Signiture>
                <GNB>
                    <li><Link href="/"><a>펫과사전</a></Link></li>
                    <li><Link href="/"><a>커뮤니티</a></Link></li>
                </GNB>
                <UtilMenu>
                    <li><Link href="/"><a>로그인 및 회원가입</a></Link></li>
                    <li><Link href="/"><a>내 프로필</a></Link></li>
                    <li><Link href="/"><a>로그아웃</a></Link></li>
                </UtilMenu>
            </div>
        </Header>
        <Container>
            {children}
        </Container>
        <Footer>
            <div className="inner">
                <div className="footer-signiture">
                    <Link href="/"><a>LOGO</a></Link>
                </div>
                <div className="wrapper">
                    <FooterMenu>
                        <li><Link href="/"><a>개인정보 처리방침</a></Link></li>
                        <li><Link href="/"><a>자주 묻는 질문</a></Link></li>
                        <li><Link href="/"><a>문의 conimal.project@gmail.com</a></Link></li>
                    </FooterMenu>
                    <div className="copyright">
                        © Copyright 2020 Conimal. All Rights Reserved.
                    </div>
                </div>
            </div>
        </Footer>
    </div>
  );

};

const Header = styled.header`
    & > .inner {
        width: 1060px;
        height: 100px;
        color: #002F6C;
        position:relative; 
        margin: 0 auto;
        font-weight: bold; 
        font-size: 16px; 
        line-height: 100px;    
    }
    & a {
        text-decoration: none; 
    }
`;

const Signiture = styled.div`
    width: 100px; 
    display: inline-block; 
`

const GNB = styled.ul`
    text-align:ceter; 
    display:inline-block; 
    & li  {
        display:inline-block; 
        line-height: 100px; 
        padding: 0 10px; 
    }

    `
    
const UtilMenu = styled.ul`
    position: absolute; 
    right: 0; 
    top: 0; 

    & li {
        display: inline-block; 
        padding: 0 10px; 
    }
    & li:last-of-type {
        padding: 0 0 0 10px; 
    }
`

const Container = styled.div`
    width: 1060px;
    min-height: 500px; 
    margin : 0 auto; 
`

const Footer = styled.footer`
    width:100%; 
    height: 170px; 
    background: #F0F0F0; 
    color: #4f4f4f;
    padding: 60px 0; 
    & .inner {
        width: 1060px; 
        display:flex; 
        margin: 0 auto; 
        justify-content: space-between; 
    }
    
    & a {
        color: #4f4f4f;
        text-decoration: none; 
    }

    & .footer-signiture {
        width: 100px; 
    }
`;


const FooterMenu = styled.ul`
    display:inline-block; 
    margin-bottom: 15px; 

    & li {
        display:inline-block; 
    }

    & li:not(:first-of-type) {
        margin-left: 15px;
        padding-left: 14px; 
        position:relative;
    }

    & li:not(:first-of-type) a::before {
        content: '';
        display: inline-block;
        position: absolute;
        box-sizing: border-box;
        width: 2px;
        height: 10px;
        left: 0;
        background: #666;
    }
`


export default AppLayout;