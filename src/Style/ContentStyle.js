import { StyleSheet } from 'react-native'
import * as Parent from './ParentStyle'

export const styles = StyleSheet.create({

    rowContainer:
    {
        flexDirection: 'row'
    },

    // Top Carousel
    previewImg:
    {
        height:300
    },

    // Section
    sectionTitle:
    {
        color: Parent.colorBlueMax,
        fontSize: Parent.sizeFontMax-2,
        marginVertical: 10,
    },

    // Content
    contentType:
    {
        backgroundColor: Parent.colorGreyMin,
        fontSize: Parent.sizeFontMin,
        color: Parent.colorWhite,
        marginVertical: 10,
        alignSelf: 'flex-start',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    contentTitle:
    {
        fontSize: Parent.sizeFontMax,
        color: Parent.colorGreyMax,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    contentDesc:
    {
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMid,
    },

    // Author
    authorImg:
    {
        width:50,
        height:50,
        borderRadius:100,
    },
    authorName:
    {
        fontWeight: 'bold',
        fontSize: Parent.sizeFontMid,
        marginTop: 10,
        marginLeft: 10,
        color: Parent.colorGreyMax
    },

    // Purchase Bar (Fixed Bottom)
    purchaseBarView:
    {
        backgroundColor: Parent.colorBlueMax,
        height: 54,
        flexDirection: 'row',
    },
    purchaseBarPrice:
    {
        fontSize: Parent.sizeFontMax,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 12,
    },
    purchaseBarAction:
    {
        backgroundColor: Parent.colorWhite,
        marginVertical: 8,
        alignSelf: 'flex-start',
        borderRadius: 5,
        position: 'absolute',
        right: 0,
        marginRight: 20,
    },
    purchaseBarActionText:
    {
        fontSize: Parent.sizeFontMid,
    },
    buttonTextSecondary:
    {
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMax,
    },

    textDef:
    {
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMid,
    },
    textBold:
    {
        fontWeight: 'bold',
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMax,
    },
    paymentImg:
    {
        height: 30,
        position: 'absolute',
        left: -45,
    },

    paymentMethodText:
    {
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMid,
        marginVertical: 15,
    },
    selectedPaymentText:
    {
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMid,
        fontWeight: 'bold',
    }


})
