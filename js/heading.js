$(document).ready(function () {
    $('article h1').each(function () {
        $(this).wrap('<div class="post-heading">');
        $(this).wrapInner('<span class="post-heading-span"></span>');
    })
})