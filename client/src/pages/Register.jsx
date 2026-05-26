
import { Form, Button, Input, message } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from '../api/user';

export default function Register() {
    const navigate = useNavigate();
    const handleFinish = async (values) => {
        const data = await RegisterUser(values);
        if (data.success) {
            message.success(data.message);
            // console.log(data.message);
            navigate('/login');
        }
        else {
            message.error(data.message);
            // console.log(data.message);
            //navigate('/login');

        }

    }
    return (
        <>
            <header className="App-header">
                <main className="main-area mw-500 text-center px-3">
                    <section className="left-section">
                        <h1>Register to BookMyShow</h1>
                    </section>
                    <section>
                        <Form layout="vertical" onFinish={handleFinish}>
                            <Form.Item
                                label="Name"
                                htmlFor="name"
                                name="name"
                                className="d-block"
                                rules={[{ required: true, message: "Name is required" }]}
                            >
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                ></Input>
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                htmlFor="email"
                                className="d-block"
                                rules={[{ required: true, message: "Please enter an email" }]}
                            >
                                <Input id="email" type="text" placeholder="Enter your email" />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                htmlFor="password"
                                name="password"
                                className="d-block"
                                rules={[{ required: true, message: "Please enter your password" }]}
                            >
                                <Input id="password" type="password" placeholder="Enter your password" />
                            </Form.Item>
                            <Form.Item
                                className="d-block"
                            >
                                <Button type="primary"
                                    block
                                    htmlType="submit"
                                    style={{ fontSize: "1rem", fontWeight: "600" }} >

                                    Register
                                </Button>
                            </Form.Item>
                        </Form>
                        <div>
                            <p>
                                Already User? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </section>
                </main>
            </header >
        </>

    )
}