/*删除tr响应函数*/
function delA() {
    // alert("hello");

    //通过a获取tr
    //点击超链接以后需要删除超链接所在的那行
    //获取当前tr
    var tr = this.parentNode.parentNode;

    //删除之前弹出提示框
    //alert("确认删除吗？");

    /*
    confirm()用于弹出一个带有确认和取消按钮的提示框
    需要一个字符串作为参数，该字符串将会作为提示文字显示出来
    */
    //confirm("确认删除吗？");
    //如果用户点击确认则会返回true，如果点击取消返回false
    //var flag=confirm("确认删除吗？");

    //获取要删除的员工的名字
    var name = tr.getElementsByTagName("td")[0].innerHTML;

    var flag = confirm("确认删除" + name + "吗？");

    //如果用户点击确认
    if (flag) {
        //删除tr
        tr.parentNode.removeChild(tr);
    }



    /*
    点击超链接以后，超链接会跳转页面，这个是超链接的默认行为
    但是此时我们不希望出现默认行为，可以通过在响应函数的最后return false来取消默认行为
    */
    return false;
};

window.onload = function() {
    /*点击超链接后，删除一个员工的信息
     */
    //获取所有超链接
    var allA = document.getElementsByTagName("a");

    //为每个超链接都绑定一个单击响应函数
    for (var i = 0; i < allA.length; i++) {
        allA[i].onclick = delA;


        /*添加员工信息
        点击按钮后，将员工的信息添加到表格中
        */

        //为提交按钮绑定一个单机响应函数
        var addEmpButton = document.getElementById("addEmpButton");
        addEmpButton.onclick = function() {
            //获取用户添加的员工信息
            //获取员工的名字
            var name = document.getElementById("empName").value;
            //获取员工的email和salary
            var email = document.getElementById("email").value;
            var salary = document.getElementById("salary").value;
            // alert(name + "," + email + "," + salary);
            //需要将获取到的信息保存到tr中

            //创建一个tr
            var tr = document.createElement("tr");

            //创建四个td
            var nameTd = document.createElement("td");
            var emailTd = document.createElement("td");
            var salaryTd = document.createElement("td");
            var aTd = document.createElement("td");

            //创建一个a元素
            var a = document.createElement("a");

            //创建文本节点
            var nameText = document.createTextNode(name);
            var emailText = document.createTextNode(email);
            var salaryText = document.createTextNode(salary);
            var delText = document.createTextNode("Delete");

            //将文本添加到td中
            nameTd.appendChild(nameText);
            emailTd.appendChild(emailText);
            salaryTd.appendChild(salaryText);

            //向a中添加文本
            a.appendChild(delText);
            //将a添加到td中
            aTd.appendChild(a);

            //将td添加到tr中
            tr.appendChild(nameTd);
            tr.appendChild(emailTd);
            tr.appendChild(salaryTd);
            tr.appendChild(aTd);

            //向a中添加href属性
            a.href = "javascript:;";

            //为我们新添加的a重新绑定单机响应函数
            //为每个超链接都绑定一个单击响应函数

            a.onclick = delA;

            //获取table
            var employeeTable = document.getElementById("employeeTable");
            //获取employeeTable中的tbody
            var tbody = employeeTable.getElementsByTagName("tbody")[0];
            //将tr添加到table
            employeeTable.appendChild(tr);

        }
    };
}