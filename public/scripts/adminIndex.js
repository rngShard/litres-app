let postNewLitRes = function() {
    let litRes = {},
        keys = ['researcher','supervisor','title','research-Question'];
    keys.forEach(function(key, i) {
        litRes[key] = $('form :input[name='+key+']').val();
        if (i === keys.length - 1) {
            litRes['status'] = 'active';
            $.post('/api/info', litRes).done(function(data) {
                console.log(data);
                location.reload();
            });
        }
    });
};