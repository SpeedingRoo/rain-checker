import styled from 'styled-components';
import '../util/fonts/fonts.css';

const SHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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
    flex:1;
    background: rgb(1,217,255);
    background: linear-gradient(180deg, rgba(1,217,255,1) 0%, rgba(82,189,228,1) 25%, rgba(40,183,213,1) 50%, rgba(0,138,222,1) 75%, rgba(23,67,184,1) 100%);
    & > section > * {
        flex-flow: row;
        justify-content:center;
        align-items: center;
        text-align: center;
        padding: 10px 0 10px;
        margin: 0 auto;
    }
`;

const SList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #eee;
    margin:0;
    padding: 0;
`;

const SListItem = styled.li`
    display: inline-block;
    width: 70px;
    height: 35px;
    background-color: #bbb;
    text-align: center;
    padding-top: 15px;
    /* 把导航列表内每个链接文字的下划线去掉 */
    & > a {
        text-decoration: none;
    }
`;

const SFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    height: 50px;
    color: red;
    background-color: #eee;
    font-family: 'Zen Loop', cursive;
    font-family: 'Zen Tokyo Zoo', cursive;
`;

export { SHeader, SBody, SFooter, SList, SListItem };