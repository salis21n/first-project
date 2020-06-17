function luasPersegi() {
    var sPersegi, resultPersegi;
    sPersegi = parseFloat(document.getElementById("sisiPersegi").value);
    resultPersegi = sPersegi * sPersegi;
    document.getElementById("luasPersegi").value = resultPersegi;
}

function resetPersegi() {
    document.getElementById("sisiPersegi").value = '';
    document.getElementById("luasPersegi").value = '';
}

function luasPersegiPanjang() {
    var pPersegiPanjang, lPersegiPanjang, resultPersegiPanjang;
    pPersegiPanjang = parseFloat(document.getElementById("panjangPersegiPanjang").value);
    lPersegiPanjang = parseFloat(document.getElementById("lebarPersegiPanjang").value);
    resultPersegiPanjang = pPersegiPanjang * lPersegiPanjang;
    document.getElementById("luasPersegiPanjang").value = resultPersegiPanjang;
}

function resetPersegiPanjang() {
    document.getElementById("panjangPersegiPanjang").value = '';
    document.getElementById("lebarPersegiPanjang").value = '';
    document.getElementById("luasPersegiPanjang").value = '';
}

function luasJajarGenjang() {
    var aJajarGenjang, tJajarGenjang, resultJajarGenjang;
    aJajarGenjang = parseFloat(document.getElementById("alasJajarGenjang").value);
    tJajarGenjang = parseFloat(document.getElementById("tinggiJajarGenjang").value);
    resultJajarGenjang = aJajarGenjang * tJajarGenjang;
    document.getElementById("luasJajarGenjang").value = resultJajarGenjang;
}

function resetJajarGenjang() {
    document.getElementById("alasJajarGenjang").value = '';
    document.getElementById("tinggiJajarGenjang").value = '';
    document.getElementById("luasJajarGenjang").value = '';
}

function luasTrapesium() {
    var aTrapresium, cTrapesium, tTrapesium, resultTrapesium;
    aTrapresium = parseFloat(document.getElementById("sisiATrapesium").value);
    cTrapesium = parseFloat(document.getElementById("sisiCTrapesium").value);
    tTrapesium = parseFloat(document.getElementById("tinggiTrapesium").value);
    resultTrapesium = (aTrapresium + cTrapesium) * tTrapesium / 2;
    document.getElementById("luasTrapesium").value = resultTrapesium;
}

function resetTrapesium() {
    document.getElementById("sisiATrapesium").value = '';
    document.getElementById("sisiCTrapesium").value = '';
    document.getElementById("tinggiTrapesium").value = '';
    document.getElementById("luasTrapesium").value = '';
}

function luasBelahKetupat() {
    var d1BelahKetupat, d2BelahKetupat, resultBelahKetupat;
    d1BelahKetupat = parseFloat(document.getElementById("d1BelahKetupat").value);
    d2BelahKetupat = parseFloat(document.getElementById("d2BelahKetupat").value);
    resultBelahKetupat = (1 / 2) * d1BelahKetupat * d2BelahKetupat;
    document.getElementById("luasBelahKetupat").value = resultBelahKetupat;
}

function resetBelahKetupat() {
    document.getElementById("d1BelahKetupat").value = '';
    document.getElementById("d2BelahKetupat").value = '';
    document.getElementById("luasBelahKetupat").value = '';
}

function luasSegitiga() {
    var aSegitiga, tSegitiga, resultSegitiga;
    aSegitiga = parseFloat(document.getElementById("alasSegitiga").value);
    tSegitiga = parseFloat(document.getElementById("tinggiSegitiga").value);
    resultSegitiga = (1 / 2) * aSegitiga * tSegitiga;
    document.getElementById("luasSegitiga").value = resultSegitiga;
}

function resetSegitiga() {
    document.getElementById("alasSegitiga").value = '';
    document.getElementById("tinggiSegitiga").value = '';
    document.getElementById("luasSegitiga").value = '';
}

function luasLingkaran() {
    var rLingkaran, resultLingkaran;
    const pi = 3.14;
    rLingkaran = parseFloat(document.getElementById("jariLingkaran").value);
    resultLingkaran = pi * rLingkaran * rLingkaran;
    document.getElementById("luasLingkaran").value = resultLingkaran;
}

function resetLingkaran() {
    document.getElementById("jariLingkaran").value = '';
    document.getElementById("luasLingkaran").value = '';
}
