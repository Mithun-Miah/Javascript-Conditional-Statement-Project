let res_btn = document.getElementById('res-btn');

res_btn.addEventListener('click', function() {

    let ban = document.getElementById('ban').value;
    let eng = document.getElementById('eng').value;
    let mat = document.getElementById('mat').value;
    let sci = document.getElementById('sci').value;
    let his = document.getElementById('his').value;

    if (ban == '' || eng == '' || mat == '' || sci == '' || his == '') {
        //alert('*** Fillup Your All Subject Marks Correctly...');
        document.getElementById('err-msg').innerHTML = '*** Fillup Your All Subject Marks Correctly...';
    } else if (ban < 0 || eng < 0 || mat < 0 || sci < 0 || his < 0) {
        document.getElementById('err-msg').innerHTML = '';
        document.getElementById('err-msg2').innerHTML = '*** You enter nagetive number...';

        document.getElementById('grade').innerText = '';
        document.getElementById('t_marks').innerText = '';
        document.getElementById('full_exam_marks').innerText = '';
        //alert('*** You enter nagetive number...');
    } else if (ban > 100 || eng > 100 || mat > 100 || sci > 100 || his > 100) {
        document.getElementById('err-msg').innerHTML = '';
        document.getElementById('err-msg2').innerHTML = '';
        document.getElementById('err-msg3').innerHTML = '*** You enter largest number...';

        document.getElementById('grade').innerText = '';
        document.getElementById('t_marks').innerText = '';
        document.getElementById('full_exam_marks').innerText = '';
        //alert('*** You can not enter upper 100 number...');
    } else {
        document.getElementById('err-msg').innerHTML = '';
        document.getElementById('err-msg2').innerHTML = '';
        document.getElementById('err-msg3').innerHTML = '';

        let all_marks = parseInt(ban) + parseInt(eng) + parseInt(mat) + parseInt(sci) + parseInt(his);
        let average = all_marks / 5;

        if (average >= 80) {
            document.getElementById('grade').innerText = 'A+';
            document.getElementById('t_marks').innerText = all_marks;
            document.getElementById('full_exam_marks').innerText = 500;
            document.getElementById('fail_res').innerText = '';
        } else if (average >= 70) {
            document.getElementById('grade').innerText = 'A';
            document.getElementById('t_marks').innerText = all_marks;
            document.getElementById('full_exam_marks').innerText = 500;
            document.getElementById('fail_res').innerText = '';
        } else if (average >= 60) {
            document.getElementById('grade').innerText = 'B';
            document.getElementById('t_marks').innerText = all_marks;
            document.getElementById('full_exam_marks').innerText = 500;
            document.getElementById('fail_res').innerText = '';
        } else if (average >= 50) {
            document.getElementById('grade').innerText = 'C';
            document.getElementById('t_marks').innerText = all_marks;
            document.getElementById('full_exam_marks').innerText = 500;
            document.getElementById('fail_res').innerText = '';
        } else if (average >= 40) {
            document.getElementById('grade').innerText = 'D';
            document.getElementById('t_marks').innerText = all_marks;
            document.getElementById('full_exam_marks').innerText = 500;
            document.getElementById('fail_res').innerText = '';
        } else {
            document.getElementById('grade').innerText = 'Failed';
            document.getElementById('t_marks').innerText = all_marks;
            document.getElementById('full_exam_marks').innerText = 500;
            document.getElementById('fail_res').innerText = 'Sorry You Are Failed ! Please Try Again...';
        }
    }

});