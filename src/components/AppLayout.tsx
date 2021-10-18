import styled from '@emotion/styled';
import Link from 'next/link';

import { theme } from '@/styles/theme';

interface LayoutProps { children: React.ReactNode};

function AppLayout(props:LayoutProps){
    const { children } = props; 
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
        width: 106rem;
        height: 10rem;
        color: #002F6C;
        position:relative; 
        margin: 0 auto;
        font-weight: bold; 
        font-size: ${theme.fontSizes.size16}; 
        line-height: 10rem;    
    }
    & a {
        text-decoration: none; 
    }
`;

const Signiture = styled.div`
    width: 10rem; 
    display: inline-block; 
`

const GNB = styled.ul`
    text-align:ceter; 
    display:inline-block; 
    & li  {
        display:inline-block; 
        line-height: 10rem; 
        padding: 0 1rem; 
    }

    `
    
const UtilMenu = styled.ul`
    position: absolute; 
    right: 0; 
    top: 0; 

    & li {
        display: inline-block; 
        padding: 0 1rem; 
    }
    & li:last-of-type {
        padding: 0 0 0 1rem; 
    }
`

const Container = styled.div`
    max-width: 106rem;
    min-height: 50rem; 
    margin : 0 auto; 
`

const Footer = styled.footer`
    width:100%; 
    height: 170px; 
    background: #F0F0F0; 
    color: #4f4f4f;
    padding: 60px 0; 
    & .inner {
        width: 106rem; 
        display:flex; 
        margin: 0 auto; 
        justify-content: space-between; 
    }
    
    & a {
        color: #4f4f4f;
        text-decoration: none; 
    }

    & .footer-signiture {
        width: 10rem; 
    }
`;


const FooterMenu = styled.ul`
    display:inline-block; 
    margin-bottom: 1.5rem; 

    & li {
        display:inline-block; 
    }

    & li:not(:first-of-type) {
        margin-left: 1.5rem;
        padding-left: 1.4rem; 
        position:relative;
    }

    & li:not(:first-of-type) a::before {
        content: '';
        display: inline-block;
        position: absolute;
        box-sizing: border-box;
        width: 0.2rem;
        height: 1rem;
        left: 0;
        background: #666;
    }
`


export default AppLayout;