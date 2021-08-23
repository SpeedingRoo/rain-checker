import styled from 'styled-components';
import '../util/fonts/fonts.css';

const SHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    min-width:720%;
    height: 300px;
    margin:0;
    
    color: white;
    font-family: 'Zen Loop', cursive;
    background: rgb(12,8,70);
    background: linear-gradient(163deg, rgba(12,8,70,1) 0%, rgba(22,22,125,1) 28%, rgba(23,67,184,1) 58%, rgba(0,212,255,1) 100%);
`;

const SBody = styled.main`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex:1;//so that the entire SBody component can expand to the whole father container

    padding: 20px;

    width:720px;
    background: rgb(1,217,255);
    background: linear-gradient(180deg, rgba(1,217,255,1) 0%, rgba(82,189,228,1) 25%, rgba(40,183,213,1) 50%, rgba(0,138,222,1) 75%, rgba(23,67,184,1) 100%);
    
    & a {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        padding: 10px 0 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid green;
        background-color: red;
    }

    border: 2px solid rgba(0,212,255,1);
    border-radius: 5px;
`;

const SPart = styled.section`
    display: flex;
    flex-direction: ${props=>props.vertical? 'column' : 'row'};
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px;
    border: 1px solid black;
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
    color: red;
    background-color: rgb;
    font-family: 'Zen Loop', cursive;
    font-family: 'Zen Tokyo Zoo', cursive;
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
    width: 87px;
    height: 35px;

    text-align: center;
    padding-top: 15px;
    /* 把导航列表内每个链接文字的下划线去掉 */
    & > a {
        text-decoration: none;
        font-weight: bold;
        word-break: keep-all;
        color: rgba(0,138,222,1);
    }
`;

const SForm = styled.form`
    box-sizing: border-box;
    background-color: white;

    flex:1;
    display: flex;
    flex-direction:column;
    justify-content: space-between;

    padding: 30px;
    margin:0 10px 0;
    border-radius:5px;
`;

const SInput = styled.input`
    border:2px solid lightgrey;
    border-radius: 5px;;
    width: 95%;
    height: 50px;
`;

const SButton = styled.button`
    width:50px;
    height: 50px;
    border-radius: 5px;  
`;

const SCard = styled.div`
    width: 320px;
    display:flex;
    flex-direction: column;
`;

const SCardHeader = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 60px;
    margin: 0 auto;
    background-color: #EAFBFF;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const SCardBody = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
    width: 320px;
    height: 120px;
    padding: 0 ;
    margin: 0 auto;
    background-color: pink;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
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
         SCard, SCardHeader, SCardBody,
         SList, SListItem };
