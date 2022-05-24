window.onload = function() {

    //获取四个多选框items
    var items = document.getElementsByName("items");

    //获取全选全部选多选框
    var checkedAllBox = document.getElementById("checkedAllBox");

    //checkedAllBtn
    //为id为checkedAllBtn的按钮绑定一个单击响应函数
    var checkedAllBtn = document.getElementById("checkedAllBtn");
    checkedAllBtn.onclick = function() {
        //获取四个多选框items
        // var items = document.getElementsByName("items");

        //遍历items
        for (var i = 0; i < items.length; i++) {
            //通过多选框的checked属性可以获取或设置多选框的选中状态
            items[i].checked = true;
        }
        //将全选/全不选设置为选中
        checkedAllBox.checked = true;
    }


    //checkedNoBtn
    //为id为checkedNoBtn绑定一个单机响应函数
    var checkedNoBt = document.getElementById("checkedNoBtn");
    checkedNoBtn.onclick = function() {
        for (var i = 0; i < items.length; i++) {
            items[i].checked = false;
        }
        //将全选/全不选设置为选中
        checkedAllBox.checked = false;
    };

    /*反选
    点击按钮以后，选中的变成没选中，没选中的变成选中
    */
    //checkedRevBtn
    var checkedRevBtn = document.getElementById("checkedRevBtn");
    checkedRevBtn.onclick = function() {
        for (var i = 0; i < items.length; i++) {
            /*if (items[i].checked) {
                items[i].checked = false;
            } else
                items[i].checked = true;有点傻*/
            items[i].checked = !items[i].checked;
        }


        //在反选时也需要判断四个多选框是否有全部选中
        //将checkedAllBox设置为选中状态
        checkedAllBox.checked = true;
        //判断四个多选框是否全选
        for (var j = 0; j < items.length; j++) {
            //判断四个多选框是否全选
            if (!items[j].checked) {
                //一旦进入判断，则证明不是全选状态
                //将checkedAllBox者之为没选中状态
                checkedAllBox.checked = false;

                //一旦进入判断，则已经得出结果，不再继续执行循环
                break;
            } //else {
            //checkedAlljBox.checked = true;
            //}
        }
    };




    //sendBtn
    /*
    提交按钮
      点击按钮以后，将所有选中的多选框的value属性值弹出
            */
    var sendBtn = document.getElementById("sendBtn");
    sendBtn.onclick = function() {
        for (var i = 0; i < items.length; i++) {
            //判断多选框是否选中
            if (items[i].checked) {
                alert(items[i].value);
            }
        }
    }

    //#checkedAllBox
    /*全选/全不选  多选框
    当他选中时，其余的也选中，当他取消时，其余的也取消

    在事件的响应函数中，响应函数是给谁绑定的this就是谁
    */
    //var checkedAllBox = document.getElementById("checkedAllBox");
    checkedAllBox.onclick = function() {
        //设置多选框的选中状态
        for (var i = 0; i < items.length; i++) {
            //items[i].checked = checkedAllBox.checked;
            //alert(this===checkedAllBox);
            items[i].checked = this.checked;
        }
    }

    //#items
    /*
    如果四个多选框全部选中，则checkedAllBox也应该选中
    如果四个多选框都没选中，则checkedAllBox也不应该选中
    */
    //为四个多选框分别绑定单机响应函数
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function() {

            //将checkedAllBox设置为选中状态
            checkedAllBox.checked = true;
            //判断四个多选框是否全选
            for (var j = 0; j < items.length; j++) {
                //判断四个多选框是否全选
                if (!items[j].checked) {
                    //一旦进入判断，则证明不是全选状态
                    //将checkedAllBox者之为没选中状态
                    checkedAllBox.checked = false;

                    //一旦进入判断，则已经得出结果，不再继续执行循环
                    break;
                } //else {
                //checkedAlljBox.checked = true;
                //}
            }
        }
    }
}