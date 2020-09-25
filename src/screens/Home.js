import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { searchUpdate, ping } from '../actions'
import { WebView } from 'react-native-webview';
import LottieView from 'lottie-react-native';
import InputText from '../components/InputText';

const Home = ({ search: { search, loading }, searchUpdate, ping }) => {

    const [formData, setFormData] = useState({
        searchInput: '',
        url: 'https://',
        formErrors: {
            searchInput: true
        }
    });

    const onFormDataChange = (name, text) => {
        const { formErrors } = formData;

        switch (name) {
            case 'searchInput':
                formErrors.searchInput = urlRegex.test(text) ? false : true;
                break;
            default:
                break;
        }
        setFormData({ ...formData, [name]: text });

        if (urlRegex.test(text)) {
            searchUpdate({ prop: 'search', value: text });
            ping();
        }
    }

    const urlRegex = RegExp(
        /(https?:\/\/(www\.)?|www\.)[a-z0-9_]+\.(com|org|net)(\/[\w]+)?/
    );

    const { searchInput, url, formErrors } = formData;

    const { container, searchContainer, lottieContainer } = styles;


    const displayWebView = () => {
        return (
            (loading ?
                <View style={lottieContainer}>
                    <LottieView source={require('../components/loader.json')} autoPlay loop /></View> :
                <WebView
                    source={{ uri: `${url}${search}` }}
                    startInLoadingState={true}
                    renderLoading={() => {
                        return <LottieView source={require('../components/loader.json')} autoPlay loop />;
                    }}
                />
            )
        );
    };

    return (
        <View style={container}>
            <SafeAreaView>
                <View style={searchContainer}>
                    <KeyboardAvoidingView behavior="padding">
                        <InputText
                            label={'Search'}
                            iconName={'search'}
                            value={searchInput}
                            placeholder={'www.google.com'}
                            onChangeText={(nameTextValue) => { onFormDataChange('searchInput', nameTextValue) }}
                            formErrors={formErrors.searchInput} />
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
            {displayWebView()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    lottieContainer: {
        height: 400,
        width: 400,
    }
});

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

export default connect(mapStateToProps, { searchUpdate, ping })(Home)