import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,} from 'reactstrap';
import DaumPostcode from 'react-daum-postcode';
import Modal from "react-modal";


const PageForm = () => {
    
    const [zipCode, setZipcode] = useState("");
    const [roadAddress, setRoadAddress] = useState("");  // 추가
    const [isOpen, setIsOpen] = useState(false); //추가

    const completeHandler = (data) =>{
        setZipcode(data.zonecode);
        setRoadAddress(data.roadAddress);
        setUser({...user,add1:data.roadAddress});
        setIsOpen(false); //추가
    }

    // Modal 스타일
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
            left: "0",
            margin: "auto",
            width: "500px",
            height: "450px",
            padding: "0",
            overflow: "auto",
        },
    };


    // 검색 클릭
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    const [user,setUser]=useState({
        id:"",
        add1:"",
        add2:"",
        email:"",
        name:"",
        p_num1:"",
        p_num2:"",
        p_num3:"",
        pwd:"",
    })

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value});

    }

    const [pwdch,setPwdch]=useState({
        firstpwd:"",
        pwdcheck:false,
    });

    const pwdcheck=(event)=>{
        setPwdch({...pwdch,[event.target.name]:event.target.value});
    };

    const [pwdop,setPwdop]=useState(false);
    const [pwdfa,setPwdfa]=useState(false);

    const pwdchecked=(event)=>{
        if(pwdch.firstpwd===event.target.value){
            setPwdch({...pwdch,pwdcheck:true});
            setUser({...user,pwd:event.target.value});
            setPwdop(true);
            setPwdfa(false);
        }else{
            setPwdch({...pwdch,pwdcheck:false});
            setUser({...user,pwd:""});
            setPwdop(false);
            setPwdfa(true);
        }

    }

    const adduser=()=>{
        if(user.id === ""){
            alert("아이디를 입력해주십시오");
            return;
        }
        if(!pwdch.pwdcheck){
            alert("비밀번호를 체크하십시오");
            return;
        }
        if(user.pwd === ""){
            alert("비밀번호를 입력해주십시오");
            return;
        }
        if(user.p_num1 === ""){
            alert("번호를입력해주십시오");
            return;
        }
        if(user.p_num2 === ""){
            alert("번호를입력해주십시오 ");
            return;
        }
        if(user.p_num3 === ""){
            alert("번호를입력해주십시오 ");
            return;
        }
        if(user.name === ""){
            alert("이름를 입력해주십시오");
            return;
        }
        
        if(user.add1=== ""){
            alert("주소를 검색해주십시오");
            return;
        }
        
        if(user.add2 === ""){
            alert("상세주소를 입력해주십시오");
            return;
        }
      
         fetch( "http://localhost:8095/dummy/join", {
             method: "POST",
             headers: { "Content-Type": "application/json"},
             body: JSON.stringify(user),
           })
             .then((response) => {
               if (response.ok) {
                 alert("성공")
               } else {
                 alert("실패")
               }
             })
            .catch((err) => {
              alert("실패")
             });
    }

    const idcheck=()=>{
        let id={
            id:user.id
        }
        console.log(JSON.stringify(id));
        fetch( "http://localhost:8095/dummy/idcheke", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(id),
            datatype : "text",
          })
            .then((response) => {
              if (response ===0) {
                alert("사용 가능한 아이디입니다.")
              } else {
                alert("사용이 불가능한 아이디입니다.")
              }
            })
            .catch((err) => {
              alert("실패")
            });
    }
    const constr={
        width:"30%",
    }
   
    return (
        <div>
            <div className="spacer" id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">회원가입</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container style={constr}>
                <Row >
                    <Col>
                        <Form>
                            <FormGroup >
                                <Label htmlFor="id">아이디</Label>
                                <Row>
                                    <Col md="8">
                                <Input type="text" className="form-control" id="id" name="id" placeholder="아이디를 입력해주세요" onChange={onChange} /><br></br>
                                </Col>
                                <Col>
                                <input type='button' className="btn btn-inverse waves-effect waves-light"value={"아이디중복체크"}  onClick={idcheck}/>
                                </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor="name">이름</Label>
                                <Input type="text" className="form-control" id="name" name="name" placeholder="이름을 입력해주세요" onChange={onChange}/>
                            </FormGroup>
                            <br />
                            <FormGroup >
                                <Label htmlFor="password">비밀번호</Label>
                                <Input type="password" className="form-control" name="firstpwd" placeholder="6자리를 입력해주십시오" onChange={pwdcheck} />
                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor="confirmpwd">비밀번호 체크</Label>
                                <Input type="password" className="form-control" placeholder="비밀번호 체크" name='lastpwd'  onChange={pwdchecked}/>
                                {pwdop && <span style={{color:"green"}}>일치 합니다.</span>}
                                {pwdfa && <span style={{color:"red"}}>일치 하지 않습니다.</span>}
                            </FormGroup>
                            <br />
                            <FormGroup >
                                <Label htmlFor="email">이메일</Label>
                                <Input type="email" className="form-control" id="email" name="email" placeholder="이메일을 입력해주세요" onChange={onChange} />
                                <br/>
                            </FormGroup>
                            <FormGroup >
                            <Label htmlFor="add2">주소</Label>
                            <Row>
                                <Col md="8">
                            <input className="form-control" value={zipCode} readOnly placeholder="우편번호" />
                            </Col>
                            <Col>
                             <input type='button' className="btn btn-inverse waves-effect waves-light" onClick={toggle} value={"우편번호검색"} />
                             </Col>
                             </Row>
                              <br />
                              <input  className="form-control"  value={roadAddress} readOnly placeholder="도로명 주소" name="add1" onChange={onChange} />
                              <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
                              <DaumPostcode onComplete={completeHandler} >
                                </DaumPostcode>
                                <button style={{marginLeft:"200px"}} className="btn btn-inverse waves-effect waves-light" onClick={toggle}>닫기</button>
                             </Modal>
                             <br />
                             <input className="form-control" type="text" name="add2" placeholder="상세주소" onChange={onChange}/>
                            </FormGroup>
                            <br /> 
                            <FormGroup className="col-md-12">
                            <Label>전화번호</Label>
                            <Container>
                                <Row md="10" style={{width:"100%",textAlign:"center"}}>
                                    <Col md="4">
                                     <Input type="text" maxLength={"3"} className="form-control" name="p_num1"  placeholder='*^ㅁ^*' onChange={onChange}/>
                                    </Col>
                                    <Col md="4">
                                        <Input type="text" maxLength={"4"} className="form-control" name="p_num2" placeholder="1234" onChange={onChange} />
                                    </Col>
                                    <Col md="4">
                                        <Input type="text" maxLength={"4"}  className="form-control" name="p_num3" placeholder="1234"  onChange={onChange}/>
                                    </Col>
                             </Row>
                            </Container>
                            </FormGroup>
                            <br/><br/>
                            <Col style={{textAlign:"center"}}>
                                <input type='button' onClick={adduser} className="btn btn-success waves-effect waves-light m-r-10" value={"회원가입"}/>
                             
                                <input type='button' className="btn btn-inverse waves-effect waves-light" value={"뒤로가기"}/>
                            </Col>
                            <br/><br/>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageForm;
