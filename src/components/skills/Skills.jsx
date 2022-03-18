import React from 'react';
import { Link } from 'react-router-dom';
import './skills.css';
import imgResources from '../../assets/cta.png';

const Skills = () => {
  return (
    <div>
      <section className="skills container" id="skills">
        <div className="title">
          <h3 translate="no">- SKILLS -</h3>
          <h1 translate="no">Junior Front-end</h1>
          <h4 translate="no">Web Developer</h4>
        </div>
        <div className="grid-wrapper">
          <div className="grid-box">
            <div className="icon-title">
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkNWNmZiI+PHBhdGggZD0iTTE0Mi4xNTA4MywxNC4zMzMzM2gtMTEyLjMxNmMtNC40NTA1LDAgLTcuOTEyLDMuODcgLTcuNDE3NSw4LjI4NDY3bDEyLjg1NywxMTUuNzM0NWMwLjMzNjgzLDMuMDEgMi40NTgxNyw1LjUxODMzIDUuMzY3ODMsNi4zNDk2N2w0My4zMDEsMTIuMzY5NjdjMS4zNDAxNywwLjM3OTgzIDIuNzU5MTcsMC4zNzk4MyA0LjA5OTMzLDBsNDMuMzAxLC0xMi4zNjk2N2MyLjkwOTY3LC0wLjgzMTMzIDUuMDMxLC0zLjMzOTY3IDUuMzY3ODMsLTYuMzQ5NjdsMTIuODU3LC0xMTUuNzM0NWMwLjQ5NDUsLTQuNDE0NjcgLTIuOTY3LC04LjI4NDY3IC03LjQxNzUsLTguMjg0Njd6TTExNC4yODY4Myw1Ny4zMzMzM2gtNDguMjE3MzNsMS40NDA1LDE2LjU1NWw0My41NTE4MywtMC4xNDMzM2MwLjAwNzE3LDAgMC4wMTQzMywwIDAuMDIxNSwwYzEuOTk5NSwwIDMuOTA1ODMsMC44Mzg1IDUuMjYwMzMsMi4zMDc2N2MxLjM2MTY3LDEuNDc2MzMgMi4wNDI1LDMuNDU0MzMgMS44Nzc2Nyw1LjQ1MzgzbC0yLjc0NDgzLDMzLjAzMTE3Yy0wLjI0MzY3LDIuOTgxMzMgLTIuMzE0ODMsNS40OTY4MyAtNS4yMDMsNi4zMDY2N2wtMjIuMzM4NSw2LjI4NTE3Yy0wLjYzMDY3LDAuMTcyIC0xLjI5LDAuMjY1MTcgLTEuOTQyMTcsMC4yNjUxN2MtMC42NzM2NywwIC0xLjM0NzMzLC0wLjA5MzE3IC0xLjk4NTE3LC0wLjI3OTVsLTIyLjE1MjE3LC02LjQwN2MtMi44MjM2NywtMC44MTcgLTQuODU5LC0zLjI2MDgzIC01LjE0NTY3LC02LjE3NzY3bC0wLjU2NjE3LC01LjcxOWMtMC4zOTQxNywtMy45NDE2NyAyLjQ4NjgzLC03LjQ0NjE3IDYuNDIxMzMsLTcuODQwMzNjMy44NzcxNywtMC4zMjI1IDcuNDUzMzMsMi40OTQgNy44NDAzMyw2LjQyMTMzbDAuMDkzMTcsMC44ODg2N2wxNS41MjMsNC40ODYzM2wxNS41ODAzMywtNC4zNzg4M2wxLjY4NDE3LC0yMC4yOTZsLTQyLjMyNjMzLDAuMTM2MTdjLTAuMDA3MTcsMCAtMC4wMTQzMywwIC0wLjAyMTUsMGMtMy43MTk1LDAgLTYuODE1NSwtMi44MzggLTcuMTM4LC02LjU0MzE3bC0yLjY4NzUsLTMwLjg5NTVjLTAuMTc5MTcsLTEuOTk5NSAwLjQ5NDUsLTMuOTg0NjcgMS44NTYxNywtNS40NjgxN2MxLjM2MTY3LC0xLjQ4MzUgMy4yNzUxNywtMi4zMjIgNS4yODE4MywtMi4zMjJoNTYuMDM2MTdjMy45NjMxNywwIDcuMTY2NjcsMy4yMTA2NyA3LjE2NjY3LDcuMTY2NjdjMCwzLjk1NiAtMy4yMDM1LDcuMTY2NjcgLTcuMTY2NjcsNy4xNjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              />
            </div>
            <span translate="no">HyperText Markup Language</span>
            <h2>I have advanced knowledge of HTML as the basic structure of web application development.</h2>
          </div>
          <div className="grid-box">
            <div className="icon-title">
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjAiIGhlaWdodD0iNjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkNWNmZiI+PHBhdGggZD0iTTE0NS43ODcyLDE5LjEwOTJjLTEuMDg5MzMsLTEuMjE1NDcgLTIuNjQzMDcsLTEuOTA5MiAtNC4yNzEzMywtMS45MDkyaC0xMTEuMDMxNzNjLTEuNjI4MjcsMCAtMy4xODIsMC42OTM3MyAtNC4yNzEzMywxLjkwOTJjLTEuMDg5MzMsMS4yMTU0NyAtMS42MDUzMywyLjgzOCAtMS40Mjc2LDQuNDU0OGwxMi42MjQ4LDExMy42NTE4N2MwLjI1MjI3LDIuMzEwNTMgMS44ODYyNyw0LjI0MjY3IDQuMTIyMjcsNC44NzkwN2w0Mi44ODUzMywxMi4yNTIxM2MwLjUxNiwwLjE0OTA3IDEuMDQ5MiwwLjIyMzYgMS41NzY2NywwLjIyMzZjMC41Mjc0NywwIDEuMDYwNjcsLTAuMDc0NTMgMS41NzY2NywtMC4yMjM2bDQyLjg4NTMzLC0xMi4yNTIxM2MyLjIzNiwtMC42MzY0IDMuODY0MjcsLTIuNTY4NTMgNC4xMjIyNywtNC44NzkwN2wxMi42MzA1MywtMTEzLjY1MTg3YzAuMTgzNDcsLTEuNjE2OCAtMC4zMzI1MywtMy4yMzkzMyAtMS40MjE4NywtNC40NTQ4ek0xMTcuNjI1MDcsNzQuOTU3NmwtMi41NTcwNyw0MS43NjczM2wtMjguODg0NTMsOS40NDI4bC0yOC44ODQ1MywtOS40NDI4bC0xLjA5NTA3LC0xOS45NzQ5M2gxNC42MmwwLjM2NjkzLDkuMDgxNmwxNC45OTI2Nyw1LjA4NTQ3bDE0Ljk5MjY3LC01LjA4NTQ3bDEuMDk1MDcsLTE2LjM0aC0zMi4xNzU0N2wtMC43MjgxMywtMTQuNTI4MjdoMzMuNjM3NDdsMS4wOTUwNywtMTQuNTI4MjdoLTUwLjQ1OTA3bC0xLjA5NTA3LC0xNC41MzRoNjYuOTA4eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
              />
            </div>
            <span translate="no">Cascading Style Sheet Language</span>
            <h2>Advanced skills on CSS fundamentals as part of developing attractive and responsive web application.</h2>
          </div>
          <div className="grid-box">
            <div className="icon-title">
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkNWNmZiI+PHBhdGggZD0iTTE0OS4wNzU2MywxMy43NmgtMTI2LjEzNzgxYy01LjA2NTk0LDAgLTkuMTc3ODEsNC4xMTE4OCAtOS4xNzc4MSw5LjE3NzgxdjEyNi4xMjQzN2MwLDUuMDY1OTQgNC4xMTE4OCw5LjE3NzgxIDkuMTc3ODEsOS4xNzc4MWgxMjYuMTI0MzdjNS4wNjU5NCwwIDkuMTc3ODEsLTQuMTExODcgOS4xNzc4MSwtOS4xNjQzN3YtMTI2LjEzNzgxYzAsLTUuMDY1OTQgLTQuMTExODcsLTkuMTc3ODEgLTkuMTY0MzcsLTkuMTc3ODF6TTkyLjg4LDEyNC40NzE1NmMwLDEzLjc0NjU2IC04LjA2MjUsMjAuMDA4NDQgLTE5LjgzMzc1LDIwLjAwODQ0Yy0xMC42NDI1LDAgLTE4LjMxNTMxLC03LjEzNTMxIC0yMS40NDYyNSwtMTMuNzZsMTAuODE3MTksLTYuNTQ0MDZjMi4wODI4MSwzLjY5NTMxIDUuMjU0MDYsNi41NDQwNiA5LjgyMjgxLDYuNTQ0MDZjNC4zNjcxOSwwIDYuODgsLTEuNzA2NTYgNi44OCwtOC4zNDQ2OXYtNDMuMjU1MzFoMTMuNzZ6TTEyMi43MjQ2OSwxNDQuNDhjLTEyLjE4NzgxLDAgLTE5LjEwODEyLC02LjE0MDk0IC0yMi45NjQ2OSwtMTMuNzZsMTAuMzIsLTYuODhjMi44MDg0NCw0LjU5NTYzIDUuODcyMTksOC45ODk2OSAxMi4zNDkwNiw4Ljk4OTY5YzUuNDQyMTksMCA4LjI5MDk0LC0yLjcxNDM3IDguMjkwOTQsLTYuNDc2ODdjMCwtNC40ODgxMyAtMi45NTYyNSwtNi4wODcxOSAtOC45MzU5NCwtOC43MDc1bC0zLjI3ODc1LC0xLjQxMDk0Yy05LjQ3MzQ0LC00LjAzMTI1IC0xNS43NzU2MywtOS4wODM3NSAtMTUuNzc1NjMsLTE5Ljc4YzAsLTkuODM2MjUgNy41MTE1NiwtMTcuMzM0MzggMTkuMjI5MDYsLTE3LjMzNDM4YzguMzQ0NjksMCAxNC4zMzc4MSwyLjkwMjUgMTguNjY0NjksMTAuNTA4MTNsLTEwLjIxMjUsNi41NzA5NGMtMi4yNTc1LC00LjA0NDY5IC00LjY3NjI1LC01LjYzMDMxIC04LjQ1MjE5LC01LjYzMDMxYy0zLjg0MzEyLDAgLTYuMjc1MzEsMi40NDU2MyAtNi4yNzUzMSw1LjYzMDMxYzAsMy45MzcxOSAyLjQzMjE5LDUuNTIyODEgOC4wNjI1LDcuOTY4NDRsMy4yNzg3NSwxLjQxMDk0YzExLjE2NjU2LDQuNzcwMzEgMTcuNDU1MzEsOS42NDgxMyAxNy40NTUzMSwyMC42MTMxM2MwLDExLjgxMTU2IC05LjI4NTMxLDE4LjI4ODQ0IC0yMS43NTUzMSwxOC4yODg0NHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              />
            </div>
            <span translate="no">High-Level Programming Language</span>
            <h2>I'm learning basic knowledge of Javascript as an advanced programming language on my journey as a web developer.</h2>
          </div>
        </div>
      </section>

      {/* <!-- RESOURCES --> */}
      <section className="sponsor-section" id='sponsor'>
        <div className="sponsor-container container grid">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="sponsor-content">
            <img src={imgResources} alt="" />
            <h2 translate="no">Technology Resources Used in Development</h2>
            <Link to="/resources" className="btn-resources">
              View page &raquo;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
