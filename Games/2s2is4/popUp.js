function pushData(name, score, category) {
    console.log(name, score, category);
    axios({
        method: 'POST',
        url: 'https://us-central1-itec-websession.cloudfunctions.net/2s2is4/record',
        data: {
            user: name,
            score: score,
            category: category
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

function sweetUI(score, category) {
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
                        text: 'Your score: ' + score,
                        showLoaderOnConfirm: true,
                        preConfirm: async () => {
                            return pushData(name, score, category).then();
                        },
                        allowOutsideClick: () => !Swal.isLoading()
                    })
                }
            } else if ( result.dismiss === Swal.DismissReason.cancel ) {
                swalWithBootstrapButtons.fire(
                'Thank you'
                )
            }
        })
    },200);
}