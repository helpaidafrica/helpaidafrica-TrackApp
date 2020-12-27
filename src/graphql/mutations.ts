/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      label
      altText
      src
      thumbnail_src
      userID
      dateAdded
      isActive
      createdAt
      updatedAt
      user {
        id
        name
        orgID
        hashedSecret
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        rank
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      label
      altText
      src
      thumbnail_src
      userID
      dateAdded
      isActive
      createdAt
      updatedAt
      user {
        id
        name
        orgID
        hashedSecret
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        rank
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      label
      altText
      src
      thumbnail_src
      userID
      dateAdded
      isActive
      createdAt
      updatedAt
      user {
        id
        name
        orgID
        hashedSecret
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        rank
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
    }
  }
`;
export const createBoxCategory = /* GraphQL */ `
  mutation CreateBoxCategory(
    $input: CreateBoxCategoryInput!
    $condition: ModelBoxCategoryConditionInput
  ) {
    createBoxCategory(input: $input, condition: $condition) {
      id
      name
      isActive
      createdAt
      updatedAt
      boxes {
        items {
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateBoxCategory = /* GraphQL */ `
  mutation UpdateBoxCategory(
    $input: UpdateBoxCategoryInput!
    $condition: ModelBoxCategoryConditionInput
  ) {
    updateBoxCategory(input: $input, condition: $condition) {
      id
      name
      isActive
      createdAt
      updatedAt
      boxes {
        items {
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteBoxCategory = /* GraphQL */ `
  mutation DeleteBoxCategory(
    $input: DeleteBoxCategoryInput!
    $condition: ModelBoxCategoryConditionInput
  ) {
    deleteBoxCategory(input: $input, condition: $condition) {
      id
      name
      isActive
      createdAt
      updatedAt
      boxes {
        items {
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createApihealthCheckInfo = /* GraphQL */ `
  mutation CreateApihealthCheckInfo(
    $input: CreateApihealthCheckInfoInput!
    $condition: ModelApihealthCheckInfoConditionInput
  ) {
    createApihealthCheckInfo(input: $input, condition: $condition) {
      id
      status
      isActive
      proceed
      message
      lastUpdated
      createdAt
      updatedAt
    }
  }
`;
export const updateApihealthCheckInfo = /* GraphQL */ `
  mutation UpdateApihealthCheckInfo(
    $input: UpdateApihealthCheckInfoInput!
    $condition: ModelApihealthCheckInfoConditionInput
  ) {
    updateApihealthCheckInfo(input: $input, condition: $condition) {
      id
      status
      isActive
      proceed
      message
      lastUpdated
      createdAt
      updatedAt
    }
  }
`;
export const deleteApihealthCheckInfo = /* GraphQL */ `
  mutation DeleteApihealthCheckInfo(
    $input: DeleteApihealthCheckInfoInput!
    $condition: ModelApihealthCheckInfoConditionInput
  ) {
    deleteApihealthCheckInfo(input: $input, condition: $condition) {
      id
      status
      isActive
      proceed
      message
      lastUpdated
      createdAt
      updatedAt
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      label
      addressLine1
      addressLine2
      city
      state
      province
      zipCode
      postalCode
      country
      createdAt
      updatedAt
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      label
      addressLine1
      addressLine2
      city
      state
      province
      zipCode
      postalCode
      country
      createdAt
      updatedAt
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      label
      addressLine1
      addressLine2
      city
      state
      province
      zipCode
      postalCode
      country
      createdAt
      updatedAt
    }
  }
`;
export const createPhone = /* GraphQL */ `
  mutation CreatePhone(
    $input: CreatePhoneInput!
    $condition: ModelPhoneConditionInput
  ) {
    createPhone(input: $input, condition: $condition) {
      id
      phone
      isActive
      type
      createdAt
      updatedAt
    }
  }
`;
export const updatePhone = /* GraphQL */ `
  mutation UpdatePhone(
    $input: UpdatePhoneInput!
    $condition: ModelPhoneConditionInput
  ) {
    updatePhone(input: $input, condition: $condition) {
      id
      phone
      isActive
      type
      createdAt
      updatedAt
    }
  }
`;
export const deletePhone = /* GraphQL */ `
  mutation DeletePhone(
    $input: DeletePhoneInput!
    $condition: ModelPhoneConditionInput
  ) {
    deletePhone(input: $input, condition: $condition) {
      id
      phone
      isActive
      type
      createdAt
      updatedAt
    }
  }
`;
export const createOrg = /* GraphQL */ `
  mutation CreateOrg(
    $input: CreateOrgInput!
    $condition: ModelOrgConditionInput
  ) {
    createOrg(input: $input, condition: $condition) {
      id
      name
      description
      addressID
      email
      primaryPhone {
        id
        phone
        isActive
        type
        createdAt
        updatedAt
      }
      otherPhones {
        id
        phone
        isActive
        type
        createdAt
        updatedAt
      }
      primaryDomain
      privacyPolicy
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      notes
      isActive
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      address {
        id
        label
        addressLine1
        addressLine2
        city
        state
        province
        zipCode
        postalCode
        country
        createdAt
        updatedAt
      }
      boxes {
        items {
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateOrg = /* GraphQL */ `
  mutation UpdateOrg(
    $input: UpdateOrgInput!
    $condition: ModelOrgConditionInput
  ) {
    updateOrg(input: $input, condition: $condition) {
      id
      name
      description
      addressID
      email
      primaryPhone {
        id
        phone
        isActive
        type
        createdAt
        updatedAt
      }
      otherPhones {
        id
        phone
        isActive
        type
        createdAt
        updatedAt
      }
      primaryDomain
      privacyPolicy
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      notes
      isActive
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      address {
        id
        label
        addressLine1
        addressLine2
        city
        state
        province
        zipCode
        postalCode
        country
        createdAt
        updatedAt
      }
      boxes {
        items {
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteOrg = /* GraphQL */ `
  mutation DeleteOrg(
    $input: DeleteOrgInput!
    $condition: ModelOrgConditionInput
  ) {
    deleteOrg(input: $input, condition: $condition) {
      id
      name
      description
      addressID
      email
      primaryPhone {
        id
        phone
        isActive
        type
        createdAt
        updatedAt
      }
      otherPhones {
        id
        phone
        isActive
        type
        createdAt
        updatedAt
      }
      primaryDomain
      privacyPolicy
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      notes
      isActive
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      address {
        id
        label
        addressLine1
        addressLine2
        city
        state
        province
        zipCode
        postalCode
        country
        createdAt
        updatedAt
      }
      boxes {
        items {
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createLocationInfo = /* GraphQL */ `
  mutation CreateLocationInfo(
    $input: CreateLocationInfoInput!
    $condition: ModelLocationInfoConditionInput
  ) {
    createLocationInfo(input: $input, condition: $condition) {
      id
      locationLabel
      latitude
      longitude
      isActive
      addressID
      phones {
        id
        phone
        isActive
        type
        createdAt
        updatedAt
      }
      plusCode
      website
      notes
      notesHistory
      tags
      createdAt
      updatedAt
      address {
        id
        label
        addressLine1
        addressLine2
        city
        state
        province
        zipCode
        postalCode
        country
        createdAt
        updatedAt
      }
      boxLocations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateLocationInfo = /* GraphQL */ `
  mutation UpdateLocationInfo(
    $input: UpdateLocationInfoInput!
    $condition: ModelLocationInfoConditionInput
  ) {
    updateLocationInfo(input: $input, condition: $condition) {
      id
      locationLabel
      latitude
      longitude
      isActive
      addressID
      phones {
        id
        phone
        isActive
        type
        createdAt
        updatedAt
      }
      plusCode
      website
      notes
      notesHistory
      tags
      createdAt
      updatedAt
      address {
        id
        label
        addressLine1
        addressLine2
        city
        state
        province
        zipCode
        postalCode
        country
        createdAt
        updatedAt
      }
      boxLocations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteLocationInfo = /* GraphQL */ `
  mutation DeleteLocationInfo(
    $input: DeleteLocationInfoInput!
    $condition: ModelLocationInfoConditionInput
  ) {
    deleteLocationInfo(input: $input, condition: $condition) {
      id
      locationLabel
      latitude
      longitude
      isActive
      addressID
      phones {
        id
        phone
        isActive
        type
        createdAt
        updatedAt
      }
      plusCode
      website
      notes
      notesHistory
      tags
      createdAt
      updatedAt
      address {
        id
        label
        addressLine1
        addressLine2
        city
        state
        province
        zipCode
        postalCode
        country
        createdAt
        updatedAt
      }
      boxLocations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createShipment = /* GraphQL */ `
  mutation CreateShipment(
    $input: CreateShipmentInput!
    $condition: ModelShipmentConditionInput
  ) {
    createShipment(input: $input, condition: $condition) {
      id
      name
      description
      isActive
      startDate
      deliveryDate
      startLocationID
      destinationLocationID
      shipmentNotes
      deliveryNotes
      trackingId
      weight
      shipmentReceiver
      status
      statusHistory
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      notes
      notesHistory
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      startLocation {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      destinationLocation {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      boxes {
        items {
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateShipment = /* GraphQL */ `
  mutation UpdateShipment(
    $input: UpdateShipmentInput!
    $condition: ModelShipmentConditionInput
  ) {
    updateShipment(input: $input, condition: $condition) {
      id
      name
      description
      isActive
      startDate
      deliveryDate
      startLocationID
      destinationLocationID
      shipmentNotes
      deliveryNotes
      trackingId
      weight
      shipmentReceiver
      status
      statusHistory
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      notes
      notesHistory
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      startLocation {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      destinationLocation {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      boxes {
        items {
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteShipment = /* GraphQL */ `
  mutation DeleteShipment(
    $input: DeleteShipmentInput!
    $condition: ModelShipmentConditionInput
  ) {
    deleteShipment(input: $input, condition: $condition) {
      id
      name
      description
      isActive
      startDate
      deliveryDate
      startLocationID
      destinationLocationID
      shipmentNotes
      deliveryNotes
      trackingId
      weight
      shipmentReceiver
      status
      statusHistory
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      notes
      notesHistory
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      startLocation {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      destinationLocation {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      boxes {
        items {
          id
          title
          contents
          size
          orgID
          shipmentID
          boxCategoryID
          isActive
          barCode
          qrCode
          barCodePhoto
          qrCodePhoto
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          notesHistory
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createBox = /* GraphQL */ `
  mutation CreateBox(
    $input: CreateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    createBox(input: $input, condition: $condition) {
      id
      title
      contents
      size
      orgID
      shipmentID
      boxCategoryID
      additionalBoxCategories {
        id
        name
        isActive
        createdAt
        updatedAt
        boxes {
          nextToken
        }
      }
      isActive
      barCode
      qrCode
      barCodePhoto
      qrCodePhoto
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      status
      statusHistory
      internalNotes
      notes
      notesHistory
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      boxCategory {
        id
        name
        isActive
        createdAt
        updatedAt
        boxes {
          nextToken
        }
      }
      org {
        id
        name
        description
        addressID
        email
        primaryPhone {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        otherPhones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        primaryDomain
        privacyPolicy
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        notes
        isActive
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxes {
          nextToken
        }
        users {
          nextToken
        }
      }
      shipment {
        id
        name
        description
        isActive
        startDate
        deliveryDate
        startLocationID
        destinationLocationID
        shipmentNotes
        deliveryNotes
        trackingId
        weight
        shipmentReceiver
        status
        statusHistory
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        notes
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        startLocation {
          id
          locationLabel
          latitude
          longitude
          isActive
          addressID
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
        }
        destinationLocation {
          id
          locationLabel
          latitude
          longitude
          isActive
          addressID
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
        }
        boxes {
          nextToken
        }
      }
      locations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateBox = /* GraphQL */ `
  mutation UpdateBox(
    $input: UpdateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    updateBox(input: $input, condition: $condition) {
      id
      title
      contents
      size
      orgID
      shipmentID
      boxCategoryID
      additionalBoxCategories {
        id
        name
        isActive
        createdAt
        updatedAt
        boxes {
          nextToken
        }
      }
      isActive
      barCode
      qrCode
      barCodePhoto
      qrCodePhoto
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      status
      statusHistory
      internalNotes
      notes
      notesHistory
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      boxCategory {
        id
        name
        isActive
        createdAt
        updatedAt
        boxes {
          nextToken
        }
      }
      org {
        id
        name
        description
        addressID
        email
        primaryPhone {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        otherPhones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        primaryDomain
        privacyPolicy
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        notes
        isActive
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxes {
          nextToken
        }
        users {
          nextToken
        }
      }
      shipment {
        id
        name
        description
        isActive
        startDate
        deliveryDate
        startLocationID
        destinationLocationID
        shipmentNotes
        deliveryNotes
        trackingId
        weight
        shipmentReceiver
        status
        statusHistory
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        notes
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        startLocation {
          id
          locationLabel
          latitude
          longitude
          isActive
          addressID
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
        }
        destinationLocation {
          id
          locationLabel
          latitude
          longitude
          isActive
          addressID
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
        }
        boxes {
          nextToken
        }
      }
      locations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteBox = /* GraphQL */ `
  mutation DeleteBox(
    $input: DeleteBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    deleteBox(input: $input, condition: $condition) {
      id
      title
      contents
      size
      orgID
      shipmentID
      boxCategoryID
      additionalBoxCategories {
        id
        name
        isActive
        createdAt
        updatedAt
        boxes {
          nextToken
        }
      }
      isActive
      barCode
      qrCode
      barCodePhoto
      qrCodePhoto
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      status
      statusHistory
      internalNotes
      notes
      notesHistory
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      boxCategory {
        id
        name
        isActive
        createdAt
        updatedAt
        boxes {
          nextToken
        }
      }
      org {
        id
        name
        description
        addressID
        email
        primaryPhone {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        otherPhones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        primaryDomain
        privacyPolicy
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        notes
        isActive
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxes {
          nextToken
        }
        users {
          nextToken
        }
      }
      shipment {
        id
        name
        description
        isActive
        startDate
        deliveryDate
        startLocationID
        destinationLocationID
        shipmentNotes
        deliveryNotes
        trackingId
        weight
        shipmentReceiver
        status
        statusHistory
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        notes
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        startLocation {
          id
          locationLabel
          latitude
          longitude
          isActive
          addressID
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
        }
        destinationLocation {
          id
          locationLabel
          latitude
          longitude
          isActive
          addressID
          plusCode
          website
          notes
          notesHistory
          tags
          createdAt
          updatedAt
        }
        boxes {
          nextToken
        }
      }
      locations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createBoxLocation = /* GraphQL */ `
  mutation CreateBoxLocation(
    $input: CreateBoxLocationInput!
    $condition: ModelBoxLocationConditionInput
  ) {
    createBoxLocation(input: $input, condition: $condition) {
      id
      boxID
      locationInfoID
      scanDateTime
      scannedByUserID
      notes
      isFinal
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      isActive
      trackingInfoID
      isFlagged
      FlagNotes
      boxStatus
      destinationLocationInfoID
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      locationInfo {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      destinationLocationInfo {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      box {
        id
        title
        contents
        size
        orgID
        shipmentID
        boxCategoryID
        additionalBoxCategories {
          id
          name
          isActive
          createdAt
          updatedAt
        }
        isActive
        barCode
        qrCode
        barCodePhoto
        qrCodePhoto
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        boxCategory {
          id
          name
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        shipment {
          id
          name
          description
          isActive
          startDate
          deliveryDate
          startLocationID
          destinationLocationID
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          imageID
          notes
          notesHistory
          createdAt
          updatedAt
        }
        locations {
          nextToken
        }
      }
      trackingInfo {
        id
        timeOfDelivery
        userID
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        internalNotes
        notes
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      scannedByUser {
        id
        name
        orgID
        hashedSecret
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        rank
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
    }
  }
`;
export const updateBoxLocation = /* GraphQL */ `
  mutation UpdateBoxLocation(
    $input: UpdateBoxLocationInput!
    $condition: ModelBoxLocationConditionInput
  ) {
    updateBoxLocation(input: $input, condition: $condition) {
      id
      boxID
      locationInfoID
      scanDateTime
      scannedByUserID
      notes
      isFinal
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      isActive
      trackingInfoID
      isFlagged
      FlagNotes
      boxStatus
      destinationLocationInfoID
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      locationInfo {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      destinationLocationInfo {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      box {
        id
        title
        contents
        size
        orgID
        shipmentID
        boxCategoryID
        additionalBoxCategories {
          id
          name
          isActive
          createdAt
          updatedAt
        }
        isActive
        barCode
        qrCode
        barCodePhoto
        qrCodePhoto
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        boxCategory {
          id
          name
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        shipment {
          id
          name
          description
          isActive
          startDate
          deliveryDate
          startLocationID
          destinationLocationID
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          imageID
          notes
          notesHistory
          createdAt
          updatedAt
        }
        locations {
          nextToken
        }
      }
      trackingInfo {
        id
        timeOfDelivery
        userID
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        internalNotes
        notes
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      scannedByUser {
        id
        name
        orgID
        hashedSecret
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        rank
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
    }
  }
`;
export const deleteBoxLocation = /* GraphQL */ `
  mutation DeleteBoxLocation(
    $input: DeleteBoxLocationInput!
    $condition: ModelBoxLocationConditionInput
  ) {
    deleteBoxLocation(input: $input, condition: $condition) {
      id
      boxID
      locationInfoID
      scanDateTime
      scannedByUserID
      notes
      isFinal
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      isActive
      trackingInfoID
      isFlagged
      FlagNotes
      boxStatus
      destinationLocationInfoID
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      locationInfo {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      destinationLocationInfo {
        id
        locationLabel
        latitude
        longitude
        isActive
        addressID
        phones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        plusCode
        website
        notes
        notesHistory
        tags
        createdAt
        updatedAt
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
      box {
        id
        title
        contents
        size
        orgID
        shipmentID
        boxCategoryID
        additionalBoxCategories {
          id
          name
          isActive
          createdAt
          updatedAt
        }
        isActive
        barCode
        qrCode
        barCodePhoto
        qrCodePhoto
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        boxCategory {
          id
          name
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        shipment {
          id
          name
          description
          isActive
          startDate
          deliveryDate
          startLocationID
          destinationLocationID
          shipmentNotes
          deliveryNotes
          trackingId
          weight
          shipmentReceiver
          status
          statusHistory
          tags
          imageID
          notes
          notesHistory
          createdAt
          updatedAt
        }
        locations {
          nextToken
        }
      }
      trackingInfo {
        id
        timeOfDelivery
        userID
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        internalNotes
        notes
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      scannedByUser {
        id
        name
        orgID
        hashedSecret
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        rank
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
    }
  }
`;
export const createTrackingInfo = /* GraphQL */ `
  mutation CreateTrackingInfo(
    $input: CreateTrackingInfoInput!
    $condition: ModelTrackingInfoConditionInput
  ) {
    createTrackingInfo(input: $input, condition: $condition) {
      id
      timeOfDelivery
      userID
      isActive
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      internalNotes
      notes
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      boxLocations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        orgID
        hashedSecret
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        rank
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
    }
  }
`;
export const updateTrackingInfo = /* GraphQL */ `
  mutation UpdateTrackingInfo(
    $input: UpdateTrackingInfoInput!
    $condition: ModelTrackingInfoConditionInput
  ) {
    updateTrackingInfo(input: $input, condition: $condition) {
      id
      timeOfDelivery
      userID
      isActive
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      internalNotes
      notes
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      boxLocations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        orgID
        hashedSecret
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        rank
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
    }
  }
`;
export const deleteTrackingInfo = /* GraphQL */ `
  mutation DeleteTrackingInfo(
    $input: DeleteTrackingInfoInput!
    $condition: ModelTrackingInfoConditionInput
  ) {
    deleteTrackingInfo(input: $input, condition: $condition) {
      id
      timeOfDelivery
      userID
      isActive
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      internalNotes
      notes
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      boxLocations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        orgID
        hashedSecret
        isActive
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        status
        statusHistory
        internalNotes
        notes
        rank
        notesHistory
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        org {
          id
          name
          description
          addressID
          email
          primaryDomain
          privacyPolicy
          tags
          imageID
          notes
          isActive
          createdAt
          updatedAt
        }
        boxLocations {
          nextToken
        }
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      orgID
      hashedSecret
      isActive
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      status
      statusHistory
      internalNotes
      notes
      rank
      notesHistory
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      org {
        id
        name
        description
        addressID
        email
        primaryPhone {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        otherPhones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        primaryDomain
        privacyPolicy
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        notes
        isActive
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxes {
          nextToken
        }
        users {
          nextToken
        }
      }
      boxLocations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      orgID
      hashedSecret
      isActive
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      status
      statusHistory
      internalNotes
      notes
      rank
      notesHistory
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      org {
        id
        name
        description
        addressID
        email
        primaryPhone {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        otherPhones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        primaryDomain
        privacyPolicy
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        notes
        isActive
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxes {
          nextToken
        }
        users {
          nextToken
        }
      }
      boxLocations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      orgID
      hashedSecret
      isActive
      tags
      imageID
      images {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      status
      statusHistory
      internalNotes
      notes
      rank
      notesHistory
      createdAt
      updatedAt
      image {
        id
        label
        altText
        src
        thumbnail_src
        userID
        dateAdded
        isActive
        createdAt
        updatedAt
        user {
          id
          name
          orgID
          hashedSecret
          isActive
          tags
          imageID
          status
          statusHistory
          internalNotes
          notes
          rank
          notesHistory
          createdAt
          updatedAt
        }
      }
      org {
        id
        name
        description
        addressID
        email
        primaryPhone {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        otherPhones {
          id
          phone
          isActive
          type
          createdAt
          updatedAt
        }
        primaryDomain
        privacyPolicy
        tags
        imageID
        images {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        notes
        isActive
        createdAt
        updatedAt
        image {
          id
          label
          altText
          src
          thumbnail_src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        address {
          id
          label
          addressLine1
          addressLine2
          city
          state
          province
          zipCode
          postalCode
          country
          createdAt
          updatedAt
        }
        boxes {
          nextToken
        }
        users {
          nextToken
        }
      }
      boxLocations {
        items {
          id
          boxID
          locationInfoID
          scanDateTime
          scannedByUserID
          notes
          isFinal
          tags
          imageID
          isActive
          trackingInfoID
          isFlagged
          FlagNotes
          boxStatus
          destinationLocationInfoID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
