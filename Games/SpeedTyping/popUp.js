function pushData(name, wpm, accuracy) {
    axios({
        method: 'POST',
        url: 'https://us-central1-itec-websession.cloudfunctions.net/speedTyping/record',
        data: {
            user: name,
            wpm: Number(wpm),
            accuracy: Number(accuracy)
        }
    })
    .then(function (response) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })
    
        Toast.fire({
            type: 'success',
            title: 'Save successfully.'
        }).then(() => {
            window.document.location = '../../Web/Game3/gameManu.html';
        })
    })
    .catch(function (error) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000
        })
    
        Toast.fire({
            type: 'error',
            title: 'Save fail.',
            text: "Error: "+error
        }).then(() => {
            window.document.location = '../../Web/Game3/gameManu.html';
        })
    });
}

function sweetUI(wpm, accuracy) {
    setTimeout(()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
    
        swalWithBootstrapButtons.fire({
            title: 'Do you want to save your score.',
            // text: "When you save it. Your score will be show on scoreboard.",
            html: 'When you save it. Your score will be show on scoreboard.<br>Your Word per Minute is : ' + wpm + '<br>Your typing accuracy is :' + accuracy,
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, do it!',
            cancelButtonText: 'No, cancel!',
        
        }).then(async (result) => {
            if (result.value) {
                const { value: name } = await Swal.fire({
                    title: 'Input your name',
                    input: 'text',
                    inputPlaceholder: 'Enter your name',
                    inputValidator: (value) => {
                        if (!value) {
                        return 'You need to write something!'
                        }
                    }
                })
                if (name) {
                    Swal.fire({
                        title: 'Entered name: ' + name,
                        html: 'Your Word per Minute is : ' + wpm + '<br>Your typing accuracy is :' + accuracy,
                        showLoaderOnConfirm: true,
                        preConfirm: async () => {
                            return pushData(name, wpm, accuracy).then();
                        },
                        allowOutsideClick: () => !Swal.isLoading()
                    })
                } else {
                    console.log("fail")
                }
            } else if ( result.dismiss === Swal.DismissReason.cancel ) {
                swalWithBootstrapButtons.fire(
                'Thank you'
                ).then(() => {
                    window.document.location = '../../Web/Game3/gameManu.html';
                })
            }
        })
    },200);
}