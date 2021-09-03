import styled from 'styled-components';
import '../util/fonts/fonts.css';
import pointer_url from '../images/base64_img';

const fonts = {
    'bungee_outline': `'Bungee Outline', cursive`,
    'carter_one': `'Carter One', cursive`,
    'zefani': `Zefani`,
    'game_over': `Game Over`,
};

const SHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  
    width: 100%;
    height: 300px;
    margin: 0;
    overflow-wrap: normal;
  
    color: white;
    font-family: ${(props) => fonts[props.font]};
    background: rgb(135, 206, 250);
    /* background: linear-gradient(
      180deg,
      rgba(1, 39, 59, 1) 0%,
      rgba(14, 80, 159, 1) 31%,
      rgba(12, 95, 180, 1) 54%,
      rgba(135, 206, 250, 1) 100%
    ); */
`;

const SH1 = styled.h1`
    height: 100px;
    width: 100%;
    flex:1;

    font-family: ${props=> fonts[props.font]};
    font-size: ${props => `${props.ems}rem`};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SBody = styled.main`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1; //so that the entire SBody component can expand to the whole father container
  
    padding: 20px;
  
    width: 720px;
    background: rgb(1, 39, 59);
    background: linear-gradient(
      0deg,
      rgba(1, 39, 59, 1) 0%,
      rgba(46, 89, 140, 1) 31%,
      rgba(74, 148, 223, 1) 68%,
      rgba(135, 206, 250, 1) 100%
    );
    /* border: 2px solid rgba(0, 212, 255, 1); */
    border-radius: 5px;
  
    & a {
      text-decoration: none;
    }
`;

const SFooter = styled.footer`
    position:absolute;
    bottom: 0;
    width:100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    color: black;

    font-family: 'Zen Loop', cursive;
    font-family: 'Zen Tokyo Zoo', cursive;
    font-size: 1.5rem;
`;

const SPart = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props=>props.vertical? 'column' : 'row'};
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 10px;
    /* border: 1px solid black; */
    min-height: 150px;
`;

const SList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: rgba(255,255,255,2,.3);

    width:720px;
    margin:10;
    padding: 0;

    border:1px solid yellow;
`;

const SListItem = styled.li`
    display: inline-block;
    box-sizing: border-box;
    text-align: center;

    width: 87px;
    height: 55px;

    padding: 15px 0 15px;
    /* 把导航列表内每个链接文字的下划线去掉 */
    & > a {
        text-decoration: none;
        font-weight: bold;
        word-break: keep-all;
        color: rgba(0,138,222,1);
        cursor: url(${pointer_url}) 14 14, crosshair;
    }

    &:hover {
        border-bottom: 3px solid rgba(33, 72, 150, 1);
        cursor: url(${pointer_url}) 14 14, crosshair;
    }
`;

const SForm = styled.form`
    box-sizing: border-box;
    background-color: white;
    flex:1;

    padding: 30px;
    border-radius:5px;
`;

const SInput = styled.input`

    width: 70%;
    height: 50px;

    border:2px solid lightgrey;
    border-radius: 5px;
`;

const SButton = styled.button`
    
    padding:0 20px 0;
    height: 50px;
    border-radius: 5px;  
`;

const SCard = styled.div`
    width: 320px;
    min-height: 240px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0px 30px;

    border-radius: ${props=>props.roundEdge? '5px' : '0'};

    &:hover{
        color: pink;
    }
`;

const SCardHeader = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 160px;
    margin: 0 auto;
    background-color: #EAFBFF;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    background-image: url(${props=>props.background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    box-shadow: white 2px -1px 5px, -2px -1px 5px white;

    color:white;
    font-family: 'Racing Sans One', cursive;
    font-size: 2rem;
    text-shadow: 6px 2px 10px black, -5px 2px 10px black;
`;

const SCardBody = styled.div `
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex:1;
    
    width: 320px;
    height: 700px;
    padding: 5px ;
    margin: 0 auto;

    box-shadow: black 2px 3px 5px, -2px 3px 9px black;

    background-color: rgb(255, 255, 255);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    & span {
        border-left: 1px solid black;
        padding-left: 5px;
        margin-top: 9px;
        margin-left: 5px;
    }
`;

const SModal = styled.div`
    display: ${props => !props.displayModal && 'none'};
    position: fixed;
    padding-top:50%;
    z-index:99;
    width: 100%;
    height: 100%;
    background-color: rgba(1,1,1,.9);
`;

export { SHeader, SBody, SPart, SFooter, 
         SForm, SInput, SButton, 
         SModal,
         SH1,
         SCard, SCardHeader, SCardBody,
         SList, SListItem };
