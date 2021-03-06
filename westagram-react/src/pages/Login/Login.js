import React, { Component } from 'react'
import './Login.css';
import '../../styles/style.css';

class Login extends Component {
    render() {
        return (
            <div id="mainRight-box">
                <section>
                    <h1>Westagram</h1>
                    <input class="sectionInput-width" id="userId-input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                    <input class="sectionInput-width" id="passwd-input"  type="password" placeholder="비밀번호"/>
                    <button class="sectionInput-width" id="login-button">로그인</button>
                    <div class="sectionInput-width">
                        <div></div>
                        <span>또는</span>
                        <div></div>
                    </div>
                    <div class="sectionInput-width login-facebook">
                        <span></span><a>facebook으로 로그인</a>
                    </div>
                    <div class="sectionInput-width" id="fogot-passwd"><a>비밀번호를 잊으셨나요?</a></div>
                </section>
                <div class="section-width" id="sign-up">
                    <p>계정이 없으신가요? <a>가입하기</a></p>
                </div>
                <div class="section-width" id="app-down">
                    <p class="section-width">앱을 다운로드하세요.</p>
                    <div id="app-img" class="section-width">
                        <img id="appleAppDown-img" alt="appStore-img" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" />
                        <img id="googleAppDown-img" alt="googlePlay-img" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login