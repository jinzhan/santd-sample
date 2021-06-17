 import san from 'san';
 import {DatePicker, Message} from 'santd';
 import dayjs from 'dayjs';
 import 'dayjs/locale/zh-cn';
 import 'santd/dist/santd.css';
 import './index.css';
 
 dayjs.locale('zh-cn');
 
 const App = san.defineComponent({
     initData() {
         return {
             date: null
         }
     },
     components: {
         's-datepicker': DatePicker
     },
     handleChange({date}) {
         Message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);
         this.data.set('date', date);
     },
     filters: {
        getDate(date) {
            return date ? date.format('YYYY-MM-DD') : '未选择';
        }
     },
     template: `<div style="width: 400px; margin: 100px auto;">
         <s-datepicker on-change="handleChange" />
         <div style="margin-top: 20px;">
             当前日期：{{date|getDate}}
         </div>
     </div>`
 });
 
 const app = new App();
 app.attach(document.body);
