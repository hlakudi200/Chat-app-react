import { Button, message } from 'antd';
import { NoticeType } from 'antd/es/message/interface';

interface IProps{
 type:NoticeType,
 content:string,
 duration:number,
}
const SweetAlert= (props:IProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const theMessage = () => {
    messageApi.open({
      type: props.type,
      content: props.content,
      duration: props.duration,
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={theMessage}>Customized display duration</Button>
    </>
  );
};

export default SweetAlert;