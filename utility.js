const jwk = {
	d: 'IQNTJnid0TZ8edMcRZ_NNlFi_BJRxAwAAPjsaPXi7cf52ZhxZzbUW7-7pKqju7uudSdPXIl19EH8hb6_I63yOtqlAKfqOdwsKTzfqSlN22kMkn9pPZZtlP3DHJpZPFCrLo1FU70gP8bZmUcXzUkIG3PzxCPRY0qHA6CRSdTILmfK0_iNsN-EJOcRVIVZg_x6SlGv5Wkn0MMYvBj0kS3nKA0h4j9KPG0RoX4xwr3mthWK_rEegAH3EiZqv49BWjyvFpvPqk5b7EA4z06IUrEFJwB6tej4NNrGxvjtoyQ2jHuMjgTLsAyxqL4J8QFTmW3SHTouK6nfS49cW58MIpNcwQ',
	p: '47stFOvhC7RD7U0vjIC39KVzRHSoMcGDRnfnKPcrkX3kz_UHDzVrPq0cLuS-c8qieM2SLW7-COsiDN1bzpSXod9u45LZp8xIlnAKMY9_UD2wRG7Xndp_mnPfbhjg--5s5Cw3sI0--HBxV2flH2VYJvbSHHiQySIQyuq-qCMZrAM',
	q: 'uEDPt6TZZkz6c0bUDgE8or9uYiKxlMYd8ataemvHC0_XunwsAXNc0kDsRrKHthIychV5oiKrD0CH7jGZVAvp1pLi5e64nUvbsVcdywSrSJ1AVu1PK1vZjhOeC9M4sxcbuyHCgJElI1I_uNSD9bdAX94kQK26rRV1IB4fxn1W2Bc',
	dp: 'FffOZ4BBm1FuZAvYFGOuWylCr03Zk8MpGLkkUW1WhJhyZCUs4yiyCb_FQjjKrnzTo3ehLETSuKWGCVupKYpn_jOBjO5zlJ4-OlTghtti2qi4wkE3B4E2Yf3fhc1clrDvTCt_y8Y0Vt7x8A6Tqa2rDUcuCZUP0nc4y3pNngaUyWU',
	dq: 'Y_Xte0E5HLIYkh_T_cEYB2d52E3gL8mIB0uia5Y7R1zKugaRzTusGPlV9kj3LYUTzybtdVP_n-evlz9bYuiPtXS9Gmd3ywaTqtOLe1AOKPf_JunaMLjE_7qO3PV75lVcGxsGrb-Q-Weu4HSTHuSLTTd0TY6zHyHsCD-vl3z6d4M',
	qi: 'pVT2gM3NvdCI0IF0vuab7XBPa_4gibWxdlqkVABtD_aKulCUTTJwuMVsDiVMk7zGQrwm3RlYkU8082eaOoLKZm2H4QFaSg78Dq5KQyZrhHvw7i4GgrsHbHPxgVRxZGU6IafFnDjl7MijlqGFUZCyA2q-d0Wc4i45Rx30FnkkF18',
	kty: 'RSA',
	e: 'AQAB',
	kid: 'iD2b2Uwo_4BpVAEQMQ2E-fvli4f2FBvSa48jLYdK0MA',
	n: 'o-gv-gWrKufAZNcogkBJqRaFsPnAgueQiuDrPwk6t-kvgcBKd1DnOcuzwDMNd3SPr75Npn5XdhGz0L4ADAuYh4qz4nYgTlIJaf0RzeefRuIOMATh16d4Twl3W315xJ0oonPReWBFcqO2Jn2xlAfctmG69ZjGu1gD_4bEUC0IcKVRbe8tkA20L2LNuCOG1E1N--vHT4kytSVIQgJZa68gzESlbTA0QtVfGSlqILtUwwEAYUOcZA4Uhtgn26Qp8rKt4e39wXSaA0bSeWmbybg_VU744pWHE1eFp3IVnkAJ9DKIhxlpETXoC5tk7h9R1FKfP_HuLKglBdk7nbmoEHL8RQ',
};

// const pem = ```
// -----BEGIN PRIVATE KEY-----
// MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCj6C/6Basq58Bk
// 1yiCQEmpFoWw+cCC55CK4Os/CTq36S+BwEp3UOc5y7PAMw13dI+vvk2mfld2EbPQ
// vgAMC5iHirPidiBOUglp/RHN559G4g4wBOHXp3hPCXdbfXnEnSiic9F5YEVyo7Ym
// fbGUB9y2Ybr1mMa7WAP/hsRQLQhwpVFt7y2QDbQvYs24I4bUTU3768dPiTK1JUhC
// AllrryDMRKVtMDRC1V8ZKWogu1TDAQBhQ5xkDhSG2CfbpCnysq3h7f3BdJoDRtJ5
// aZvJuD9VTvjilYcTV4WnchWeQAn0MoiHGWkRNegLm2TuH1HUUp8/8e4sqCUF2Tud
// uagQcvxFAgMBAAECggEAIQNTJnid0TZ8edMcRZ/NNlFi/BJRxAwAAPjsaPXi7cf5
// 2ZhxZzbUW7+7pKqju7uudSdPXIl19EH8hb6/I63yOtqlAKfqOdwsKTzfqSlN22kM
// kn9pPZZtlP3DHJpZPFCrLo1FU70gP8bZmUcXzUkIG3PzxCPRY0qHA6CRSdTILmfK
// 0/iNsN+EJOcRVIVZg/x6SlGv5Wkn0MMYvBj0kS3nKA0h4j9KPG0RoX4xwr3mthWK
// /rEegAH3EiZqv49BWjyvFpvPqk5b7EA4z06IUrEFJwB6tej4NNrGxvjtoyQ2jHuM
// jgTLsAyxqL4J8QFTmW3SHTouK6nfS49cW58MIpNcwQKBgQDjuy0U6+ELtEPtTS+M
// gLf0pXNEdKgxwYNGd+co9yuRfeTP9QcPNWs+rRwu5L5zyqJ4zZItbv4I6yIM3VvO
// lJeh327jktmnzEiWcAoxj39QPbBEbted2n+ac99uGOD77mzkLDewjT74cHFXZ+Uf
// ZVgm9tIceJDJIhDK6r6oIxmsAwKBgQC4QM+3pNlmTPpzRtQOATyiv25iIrGUxh3x
// q1p6a8cLT9e6fCwBc1zSQOxGsoe2EjJyFXmiIqsPQIfuMZlUC+nWkuLl7ridS9ux
// Vx3LBKtInUBW7U8rW9mOE54L0zizFxu7IcKAkSUjUj+41IP1t0Bf3iRArbqtFXUg
// Hh/GfVbYFwKBgBX3zmeAQZtRbmQL2BRjrlspQq9N2ZPDKRi5JFFtVoSYcmQlLOMo
// sgm/xUI4yq5806N3oSxE0rilhglbqSmKZ/4zgYzuc5SePjpU4IbbYtqouMJBNweB
// NmH934XNXJaw70wrf8vGNFbe8fAOk6mtqw1HLgmVD9J3OMt6TZ4GlMllAoGAY/Xt
// e0E5HLIYkh/T/cEYB2d52E3gL8mIB0uia5Y7R1zKugaRzTusGPlV9kj3LYUTzybt
// dVP/n+evlz9bYuiPtXS9Gmd3ywaTqtOLe1AOKPf/JunaMLjE/7qO3PV75lVcGxsG
// rb+Q+Weu4HSTHuSLTTd0TY6zHyHsCD+vl3z6d4MCgYEApVT2gM3NvdCI0IF0vuab
// 7XBPa/4gibWxdlqkVABtD/aKulCUTTJwuMVsDiVMk7zGQrwm3RlYkU8082eaOoLK
// Zm2H4QFaSg78Dq5KQyZrhHvw7i4GgrsHbHPxgVRxZGU6IafFnDjl7MijlqGFUZCy
// A2q+d0Wc4i45Rx30FnkkF18=
// -----END PRIVATE KEY-----
// ```;

// console.log(pem.length / 1024);
const jwkString = JSON.stringify(jwk);
console.log(jwkString);
// console.log(jwkString.length / 1024);

const base64 = new Buffer.from(jwkString).toString('base64');

// console.log(base64.length / 1024);
