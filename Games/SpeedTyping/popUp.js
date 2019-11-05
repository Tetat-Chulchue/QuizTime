function pushData(name, wpm, accuracy) {
    axios({
        method: 'POST',
        url: 'http://localhost:5001/itec-websession/us-central1/speedTyping/record',
        data: {
            user: name,
            wpm: wpm,
            accuracy: accuracy
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
            text: "When you save it. Your score will be show on scoreboard.",
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
                )
            }
        })
    },200);
}