
// admin login

$("#admin-login").submit(function(event){
    event.preventDefault();
    let form = $(this)
    $.ajax({
        url:"/admin/login", 
        type:"Post",
        data:form.serialize(),
        success:function(d){ 
            console.log(d)
            if(d.status){
                document.getElementById('admin-login').reset();
                window.location.href="/admin/dashboard"
            }else{
                $("#admin-login-alert").html(d.msg)
            }
        },
        error:function(err){

        }
    })
})

// change user status 
function changeStatus(id){
    $.ajax({
                url:"/admin/user/change-status",
                type:"post",
                data:{uid:id},
                success:function(result){
                    console.log(result)
                    if(result.status ==true){
                        $(`#${id}`).html("Active").removeClass("btn-danger").addClass("btn-success");
                    }else{
                        $(`#${id}`).html("Deactive").removeClass("btn-success").addClass("btn-danger");
                    }
                },
                error:function(err){
                    console.log(err)
                }
      })
}
 

 
$("#cat-add-form").submit(function(event){
  
    event.preventDefault();
    
    let form = $(this)
    $.ajax({
        url:"/admin/category/management", 
        type:"Post",
        data:form.serialize(),
        success:function(d){ 
            
            if(d.status){
                document.getElementById('cat-add-form').reset();
                window.location.href="/admin/category"
            }else{
                $("#cat-add-alert").html(d.msg)
            }
        },
        error:function(err){

        }
    })
})


// edit category
// cat-add-form-edit

$("#main-section-cat").submit(function(event){
  
    event.preventDefault();
    
    let form = $(this)
    $.ajax({
        url:"/admin/main-section", 
        type:"Post",
        data:form.serialize(),
        success:function(d){ 
            
            if(d.status){
                document.getElementById('main-section-cat').reset();
                window.location.href="/admin/cat-manage"
            }else{
                $("#maincat-add-alert").html(d.msg)
            }
        },
        error:function(err){

        }
    })
})

// /admin/add-subcat

$("#subCategory").submit(function(event){
  
    event.preventDefault();
    
    let form = $(this)
    $.ajax({
        url:"/admin/add-subcat", 
        type:"Post",
        data:form.serialize(),
        success:function(d){ 
              if(d.status){
                document.getElementById('subCategory').reset();
                window.location.href="/admin/cat-manage"
            }else{
                $("#cat-add-alert").html(d.msg)
            }
        },
        error:function(err){
            console.log(err)
        }
    })
})


function  changeOStatus(cartId, pId){
    let statusValue = $("#st_Value").val()
    console.log(statusValue)
    $.ajax({
        url: "/admin/change/order/status",
        type: "POST",
        data: {cId:cartId, proId:pId},
        success: function (result) {
             

        },
        error: function (err) {
            console.log(err)
        }
    })
}