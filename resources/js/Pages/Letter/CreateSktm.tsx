import React, {useState} from "react"
import NavLink from "@/Components/NavLink"
import { Button,
        Input,
        Drawer,
        DrawerBody,
        DrawerFooter,
        DrawerHeader,
        DrawerOverlay,
        DrawerContent,
        DrawerCloseButton,
        ListItem,
        OrderedList,
        useDisclosure } from '@chakra-ui/react'
import { TbArrowBackUp, TbCircleCheck, TbAlertCircle } from "react-icons/tb"
import { Inertia } from "@inertiajs/inertia"

const Sktm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [nik, setNik] = useState('')
    const [no_surat, setNo] = useState('')
    const [objective, setObject] = useState('')

    const storeSktm = async (e) => {
        e.preventDefault();

        Inertia.post('/surat', {
            nik: nik,
            no_surat: no_surat,
            objective: objective
        });
       }
    return(
        <>
        <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
        <title id="title">Buat Surat Keterangan Tidak Mampu</title>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n      ol.lst-kix_list_1-3 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-4 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-5 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-6 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-0 {\n        list-style-type: none;\n      }\n      .lst-kix_list_1-4 > li {\n        counter-increment: lst-ctn-kix_list_1-4;\n      }\n      ol.lst-kix_list_1-1 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-2 {\n        list-style-type: none;\n      }\n      ol.lst-kix_list_1-6.start {\n        counter-reset: lst-ctn-kix_list_1-6 0;\n      }\n      .lst-kix_list_1-1 > li {\n        counter-increment: lst-ctn-kix_list_1-1;\n      }\n      ol.lst-kix_list_1-3.start {\n        counter-reset: lst-ctn-kix_list_1-3 0;\n      }\n      ol.lst-kix_list_1-2.start {\n        counter-reset: lst-ctn-kix_list_1-2 0;\n      }\n      ol.lst-kix_list_1-8.start {\n        counter-reset: lst-ctn-kix_list_1-8 0;\n      }\n      .lst-kix_list_1-0 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-0, decimal) ". ";\n      }\n      ol.lst-kix_list_1-5.start {\n        counter-reset: lst-ctn-kix_list_1-5 0;\n      }\n      ol.lst-kix_list_1-7 {\n        list-style-type: none;\n      }\n      .lst-kix_list_1-1 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-1, lower-latin) ". ";\n      }\n      .lst-kix_list_1-2 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-2, lower-roman) ". ";\n      }\n      .lst-kix_list_1-7 > li {\n        counter-increment: lst-ctn-kix_list_1-7;\n      }\n      ol.lst-kix_list_1-8 {\n        list-style-type: none;\n      }\n      .lst-kix_list_1-3 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-3, decimal) ". ";\n      }\n      .lst-kix_list_1-4 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-4, lower-latin) ". ";\n      }\n      ol.lst-kix_list_1-0.start {\n        counter-reset: lst-ctn-kix_list_1-0 0;\n      }\n      .lst-kix_list_1-0 > li {\n        counter-increment: lst-ctn-kix_list_1-0;\n      }\n      .lst-kix_list_1-6 > li {\n        counter-increment: lst-ctn-kix_list_1-6;\n      }\n      .lst-kix_list_1-7 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-7, lower-latin) ". ";\n      }\n      .lst-kix_list_1-3 > li {\n        counter-increment: lst-ctn-kix_list_1-3;\n      }\n      .lst-kix_list_1-5 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-5, lower-roman) ". ";\n      }\n      .lst-kix_list_1-6 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-6, decimal) ". ";\n      }\n      ol.lst-kix_list_1-7.start {\n        counter-reset: lst-ctn-kix_list_1-7 0;\n      }\n      .lst-kix_list_1-2 > li {\n        counter-increment: lst-ctn-kix_list_1-2;\n      }\n      .lst-kix_list_1-5 > li {\n        counter-increment: lst-ctn-kix_list_1-5;\n      }\n      .lst-kix_list_1-8 > li {\n        counter-increment: lst-ctn-kix_list_1-8;\n      }\n      ol.lst-kix_list_1-4.start {\n        counter-reset: lst-ctn-kix_list_1-4 0;\n      }\n      .lst-kix_list_1-8 > li:before {\n        content: "" counter(lst-ctn-kix_list_1-8, lower-roman) ". ";\n      }\n      ol.lst-kix_list_1-1.start {\n        counter-reset: lst-ctn-kix_list_1-1 0;\n      }\n      ol {\n        margin: 0;\n        padding: 0;\n      }\n      table td,\n      table th {\n        padding: 0;\n      }\n      .c19 {\n        border-right-style: solid;\n        padding: 0pt 5.4pt 0pt 5.4pt;\n        border-bottom-color: #000000;\n        border-top-width: 0pt;\n        border-right-width: 0pt;\n        border-left-color: #000000;\n        vertical-align: top;\n        border-right-color: #000000;\n        border-left-width: 0pt;\n        border-top-style: solid;\n        border-left-style: solid;\n        border-bottom-width: 0pt;\n        width: 158.1pt;\n        border-top-color: #000000;\n        border-bottom-style: solid;\n      }\n      .c20 {\n        border-right-style: solid;\n        padding: 0pt 5.4pt 0pt 5.4pt;\n        border-bottom-color: #000000;\n        border-top-width: 0pt;\n        border-right-width: 0pt;\n        border-left-color: #000000;\n        vertical-align: top;\n        border-right-color: #000000;\n        border-left-width: 0pt;\n        border-top-style: solid;\n        border-left-style: solid;\n        border-bottom-width: 0pt;\n        width: 259.5pt;\n        border-top-color: #000000;\n        border-bottom-style: solid;\n      }\n      .c22 {\n        border-right-style: solid;\n        padding: 0pt 5.4pt 0pt 5.4pt;\n        border-bottom-color: #000000;\n        border-top-width: 0pt;\n        border-right-width: 0pt;\n        border-left-color: #000000;\n        vertical-align: top;\n        border-right-color: #000000;\n        border-left-width: 0pt;\n        border-top-style: solid;\n        border-left-style: solid;\n        border-bottom-width: 0pt;\n        width: 14.2pt;\n        border-top-color: #000000;\n        border-bottom-style: solid;\n      }\n      .c27 {\n        -webkit-text-decoration-skip: none;\n        color: #000000;\n        font-weight: 400;\n        text-decoration: underline;\n        text-decoration-skip-ink: none;\n        font-size: 12pt;\n        font-family: "Times New Roman";\n        font-style: normal;\n      }\n      .c25 {\n        -webkit-text-decoration-skip: none;\n        color: #000000;\n        font-weight: 400;\n        text-decoration: underline;\n        text-decoration-skip-ink: none;\n        font-size: 14pt;\n        font-family: "Times New Roman";\n        font-style: normal;\n      }\n      .c10 {\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 12pt;\n        font-family: "Arial";\n        font-style: normal;\n      }\n      .c9 {\n        padding-top: 0pt;\n        text-indent: 36pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: justify;\n      }\n      .c0 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n        height: 12pt;\n      }\n      .c13 {\n        padding-top: 0pt;\n        text-indent: 42.5pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: justify;\n      }\n      .c6 {\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 16pt;\n        font-family: "Times New Roman";\n        font-style: normal;\n      }\n      .c12 {\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 20pt;\n        font-family: "Times New Roman";\n        font-style: normal;\n      }\n      .c2 {\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 12pt;\n        font-family: "Times New Roman";\n        font-style: normal;\n      }\n      .c26 {\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        font-size: 11pt;\n        font-family: "Times New Roman";\n        font-style: normal;\n      }\n      .c15 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c1 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: center;\n      }\n      .c7 {\n        -webkit-text-decoration-skip: none;\n        font-weight: 700;\n        text-decoration: underline;\n        vertical-align: baseline;\n        text-decoration-skip-ink: none;\n        font-size: 14pt;\n      }\n      .c14 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.1500000000000001;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c4 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.5;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c32 {\n        margin-left: 35.5pt;\n        border-spacing: 0;\n        border-collapse: collapse;\n        margin-right: auto;\n      }\n      .c30 {\n        background-color: #ffffff;\n        max-width: 492.2pt;\n        padding: 36pt 42.5pt 56.7pt 74.8pt;\n      }\n      .c33 {\n        font-size: 18pt;\n        font-weight: 700;\n      }\n      .c28 {\n        font-size: 20pt;\n        font-weight: 700;\n      }\n      .c5 {\n        margin-left: 180pt;\n        text-indent: 36pt;\n      }\n      .c17 {\n        font-size: 10pt;\n        font-style: italic;\n      }\n      .c21 {\n        margin-left: 216pt;\n        text-indent: 36pt;\n      }\n      .c24 {\n        font-size: 16pt;\n        font-weight: 700;\n      }\n      .c23 {\n        margin-left: 1pt;\n      }\n      .c3 {\n        margin-left: 141.8pt;\n      }\n      .c8 {\n        height: 12pt;\n      }\n      .c31 {\n        text-indent: 36pt;\n      }\n      .c16 {\n        vertical-align: baseline;\n      }\n      .c18 {\n        margin-left: 252pt;\n      }\n      .c11 {\n        height: 213.1pt;\n      }\n      .c29 {\n        font-size: 14pt;\n      }\n      .title {\n        padding-top: 24pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 36pt;\n        padding-bottom: 6pt;\n        font-family: "Times New Roman";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .subtitle {\n        padding-top: 18pt;\n        color: #666666;\n        font-size: 24pt;\n        padding-bottom: 4pt;\n        font-family: "Georgia";\n        line-height: 1;\n        page-break-after: avoid;\n        font-style: italic;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      li {\n        color: #000000;\n        font-size: 12pt;\n        font-family: "Times New Roman";\n      }\n      p {\n        margin: 0;\n        color: #000000;\n        font-size: 12pt;\n        font-family: "Times New Roman";\n      }\n      h1 {\n        padding-top: 24pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 24pt;\n        padding-bottom: 6pt;\n        font-family: "Times New Roman";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h2 {\n        padding-top: 18pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 18pt;\n        padding-bottom: 4pt;\n        font-family: "Times New Roman";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h3 {\n        padding-top: 14pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 14pt;\n        padding-bottom: 4pt;\n        font-family: "Times New Roman";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h4 {\n        padding-top: 12pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 12pt;\n        padding-bottom: 2pt;\n        font-family: "Times New Roman";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h5 {\n        padding-top: 11pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 11pt;\n        padding-bottom: 2pt;\n        font-family: "Times New Roman";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h6 {\n        padding-top: 10pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 10pt;\n        padding-bottom: 2pt;\n        font-family: "Times New Roman";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n    '
          }}
        />
        <p className="c1 mt-10">
          <span className="c16 c24">PEMERINTAH KABUPATEN BANDUNG BARAT</span>
        </p>
        <p className="c1">
          <span className="c16 c33">KECAMATAN GUNUNGHALU</span>
        </p>
        <p className="c1">
          <span className="c16 c28">DESA BUNIJAYA</span>
        </p>
        <p className="c1">
          <span className="c16 c17">Jln. Jenderal Sudirman No. 9 Kode Pos 99999</span>
        </p>
        <p className="c1">
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
              margin: "0px 0px",
              border: "0px solid #000000",
              transform: "rotate(0rad) translateZ(0px)",
              WebkitTransform: "rotate(0rad) translateZ(0px)",
              width: "654.47px",
              height: 6
            }}
          >
            <img
              alt=""
              src="https://ik.imagekit.io/3upgjbxqx/administrasi-desa/desa-bunijaya/image2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678246706467"
              style={{
                width: "654.47px",
                height: 6,
                marginLeft: 0,
                marginTop: 0,
                transform: "rotate(0rad) translateZ(0px)",
                WebkitTransform: "rotate(0rad) translateZ(0px)"
              }}
            />
          </span>
        </p>
        <p className="c0">
          <span className="c16 c25" />
        </p>
        <p className="c1">
          <span className="c7">SURAT &nbsp;KETERANGAN &nbsp;TIDAK &nbsp;MAMPU</span>
        </p>
        <p className="c1">
          <span className="c16 c29">
            NOMOR : &nbsp;470 / &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp;
            &nbsp; &nbsp; /20..
          </span>
        </p>
        <p className="c0">
          <span className="c2" />
        </p>
        <p className="c13 c8">
          <span className="c10" />
        </p>
        <div className="relative sm:mx-0 lg:mx-[500px]">
        <p className="c13">
          <span className="c10">
            Yang bertandatangan dibawah ini Kepala Desa Ilustrasi Kecamatan Contoh
            Kabupaten Simulasi, menerangkan bahwa :
          </span>
        </p>
        <p className="c8 c13">
          <span className="c10" />
        </p>
        <p className="c0">
          <span className="c10" />
        </p>
        <a id="t.50e80d8157270bdc039504479170f72f341ade4b" />
        <a id="t.0" />
        <form onSubmit={storeSktm}>
        <table className="c32">
          <tbody>

            <tr className="c11">
              <td className="c19" colSpan={1} rowSpan={1}>
                <p className="c4">
                  <span className="c2">Nama &nbsp;</span>
                </p>
                <p className="c4">
                  <span className="c2">N I K</span>
                </p>
                <p className="c4">
                  <span className="c2">Tempat Tanggal Lahir &nbsp;</span>
                </p>
                <p className="c4">
                  <span className="c2">Jenis Kelamin &nbsp; &nbsp; </span>
                </p>
                <p className="c4">
                  <span className="c2">Agama</span>
                </p>
                <p className="c4">
                  <span className="c2">Status Perkawinan &nbsp;</span>
                </p>
                <p className="c4">
                  <span className="c2">Pekerjaan</span>
                </p>
                <p className="c4">
                  <span className="c2">Alamat / Domisili</span>
                </p>
              </td>
              <td className="c22" colSpan={1} rowSpan={1}>
                <p className="c4">
                  <span className="c2">:</span>
                </p>
                <p className="c4">
                  <span className="c2">:</span>
                </p>
                <p className="c4">
                  <span className="c2">:</span>
                </p>
                <p className="c4">
                  <span className="c2">:</span>
                </p>
                <p className="c4">
                  <span className="c2">:</span>
                </p>
                <p className="c4">
                  <span className="c2">:</span>
                </p>
                <p className="c4">
                  <span className="c2">:</span>
                </p>
                <p className="c4">
                  <span className="c2">:</span>
                </p>
              </td>
              <td className="c20" colSpan={1} rowSpan={1}>
                <p className="c4 c23">
                <span className="c2">……………………………………………</span>
                </p>
                <p className="c4">
                  <Input  value={nik} onChange={(e) => setNik(e.target.value)} isRequired size='xs' width={270} variant='flushed'></Input>
                </p>
                <p className="c4">
                <span className="c2">……………………………………………</span>
                </p>
                <p className="c4">
                <span className="c2">……………………………………………</span>
                </p>
                <p className="c4">
                <span className="c2">……………………………………………</span>
                </p>
                <p className="c4">
                <span className="c2">……………………………………………</span>
                </p>
                <p className="c4">
                <span className="c2">……………………………………………</span>
                </p>
                <p className="c14">
                  <span className="c2">Dusun &nbsp;………………… RT : …… / ……</span>
                </p>
                <p className="c14">
                  <span className="c2">Desa Bunijaya</span>
                </p>
                <p className="c14">
                  <span className="c2">Kecamatan Gununghalu</span>
                </p>
                <p className="c14">
                  <span className="c2">Kabupaten Bandung Barat</span>
                </p>
              </td>
            </tr>
               {/* </form> */}
          </tbody>
        </table>
        <div className="fixed bottom-5 right-4">
                                <Button type="submit" className="bg-mainblue font-sans w-[120px]" leftIcon={<TbCircleCheck />} colorScheme='alpha' variant='solid'>
                                    Simpan
                                </Button>
            </div>
        <p className="c4 c8">
          <span className="c2" />
        </p>
        <p className="c9">
          <span className="c2">
            Orang tersebut diatas sepanjang sepengetahuan kami dan berdasarkan Surat
            Keterangan Tidak Mampu Nomor : <Input value={no_surat} onChange={(e) => setNo(e.target.value)}></Input> dari
            Kepala Dusun ………. , benar bahwa orang tersebut tergolong Warga Tidak Mampu
            &nbsp;/ &nbsp;Prasejahtera .
          </span>
        </p>
        <p className="c8 c9">
          <span className="c2" />
        </p>
        <p className="c9">
          <span className="c2">
            Surat Keterangan Tidak Mampu ini akan dipergunakan sebagai persyaratan :
          </span>
        </p>
        <p className="c9 c8">
          <span className="c2" />
        </p>
        <p className="c1 c31">
          <span className="c2">“ <Input value={objective} onChange={(e) => setObject(e.target.value)} width={500} variant='flushed' size='xs'></Input> “</span>
        </p>
        </form>
        <p className="c0">
          <span className="c2" />
        </p>
        <p className="c9">
          <span className="c2">
            Demikian Surat Keterangan ini dibuat dengan sebenarnya untuk dapat
            dipergunakan sebagaimana mestinya .
          </span>
        </p>
        <p className="c9 c8">
          <span className="c2" />
        </p>
        <p className="c0 c21">
          <span className="c2" />
        </p>
        </div>
        <p className="c1 c3">
          <span className="c2">
            Dibuat di &nbsp; &nbsp; &nbsp; : &nbsp;Desa Bunijaya
          </span>
        </p>
        <p className="c1 c3 my-2">
          <span className="c16">&nbsp; </span>
          <span className="c16 c27">
            Pada tanggal &nbsp;: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;20..
          </span>
        </p>
        <p className="c1 c3">
          <span className="c2">Kepala Desa Bunijaya</span>
        </p>
        <p className="c0">
          <span className="c2" />
        </p>
        <p className="c1 c3 c8">
          <span className="c2" />
        </p>
        <p className="c1 c3 c8">
          <span className="c2" />
        </p>
        <p className="c1 c3 c8">
          <span className="c2" />
        </p>
        <p className="c1 c3 c8">
          <span className="c2" />
        </p>
        <p className="c1 c3">
          <span className="c27 c16">HJ JAMIL IKHSAN FARUQ</span>
        </p>
        <p className="c15 c18">
          <span className="c2">&nbsp; &nbsp; &nbsp;</span>
        </p>
        <p className="c0">
          <span className="c2" />
        </p>
        <p className="c0">
          <span className="c2" />
        </p>
        <p className="c0">
          <span className="c26 c16" />
        </p>
            <div className="fixed bottom-4 left-4">
            <NavLink href={route('surat.index')}>
                                <Button className="bg-mainblue font-sans w-[120px]" leftIcon={<TbArrowBackUp />} colorScheme='alpha' variant='solid'>
                                    Kembali
                                </Button>
                                </NavLink>
            </div>
            <div className="fixed top-4 left-4">
            <Button ref={btnRef} onClick={onOpen} className="bg-mainblue font-sans w-[50px]" colorScheme='alpha' variant='solid'>
                                <TbAlertCircle />
                                </Button>
            </div>
            <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hal yang harus diperhatikan ...</DrawerHeader>
          <DrawerBody>
          <OrderedList className="font-sans">
  <ListItem>Pastikan semua data yang dimasukan benar benar data yang valid, dikarenakan surat yang sudah dibuat tidak bisa diubah.</ListItem>
  <ListItem>Untuk data identitas penduduk cukup memasukan NIK nya saja, karena data lengkapnya diambil dari data list penduduk.</ListItem>
  <ListItem>Untuk tampilan pada saat akan di print, tampilan nya kurang lebih akan seperti halaman ini.</ListItem>
</OrderedList>
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

          <span className="c16">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
          </span>
        <p className="c0 c5">
          <span className="c2" />
        </p>
      </>

    )
}

export default Sktm
