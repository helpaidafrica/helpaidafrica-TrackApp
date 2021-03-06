/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        altText
        src
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
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      label
      altText
      src
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
export const imagesByUser = /* GraphQL */ `
  query ImagesByUser(
    $userID: ID
    $dateAdded: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ImagesByUser(
      userID: $userID
      dateAdded: $dateAdded
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        label
        altText
        src
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
      nextToken
    }
  }
`;
export const listBoxCategorys = /* GraphQL */ `
  query ListBoxCategorys(
    $filter: ModelBoxCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoxCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        isActive
        createdAt
        updatedAt
        boxes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getBoxCategory = /* GraphQL */ `
  query GetBoxCategory($id: ID!) {
    getBoxCategory(id: $id) {
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
export const getApihealthCheckInfo = /* GraphQL */ `
  query GetApihealthCheckInfo($id: ID!) {
    getApihealthCheckInfo(id: $id) {
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
export const listApihealthCheckInfos = /* GraphQL */ `
  query ListApihealthCheckInfos(
    $filter: ModelApihealthCheckInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApihealthCheckInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        isActive
        proceed
        message
        lastUpdated
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const getPhone = /* GraphQL */ `
  query GetPhone($id: ID!) {
    getPhone(id: $id) {
      id
      phone
      isActive
      type
      createdAt
      updatedAt
    }
  }
`;
export const listPhones = /* GraphQL */ `
  query ListPhones(
    $filter: ModelPhoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phone
        isActive
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listOrgs = /* GraphQL */ `
  query ListOrgs(
    $filter: ModelOrgFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrgs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrg = /* GraphQL */ `
  query GetOrg($id: ID!) {
    getOrg(id: $id) {
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
export const listLocationInfos = /* GraphQL */ `
  query ListLocationInfos(
    $filter: ModelLocationInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocationInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLocationInfo = /* GraphQL */ `
  query GetLocationInfo($id: ID!) {
    getLocationInfo(id: $id) {
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
export const listShipments = /* GraphQL */ `
  query ListShipments(
    $filter: ModelShipmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShipments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getShipment = /* GraphQL */ `
  query GetShipment($id: ID!) {
    getShipment(id: $id) {
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
export const listBoxs = /* GraphQL */ `
  query ListBoxs(
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoxs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBox = /* GraphQL */ `
  query GetBox($id: ID!) {
    getBox(id: $id) {
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
export const boxByOrgId = /* GraphQL */ `
  query BoxByOrgId(
    $orgID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BoxByOrgID(
      orgID: $orgID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const boxByShipmentId = /* GraphQL */ `
  query BoxByShipmentId(
    $shipmentID: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BoxByShipmentID(
      shipmentID: $shipmentID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const boxByBoxCategoryId = /* GraphQL */ `
  query BoxByBoxCategoryId(
    $boxCategoryID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BoxByBoxCategoryId(
      boxCategoryID: $boxCategoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const boxByTitle = /* GraphQL */ `
  query BoxByTitle(
    $title: String
    $sortDirection: ModelSortDirection
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BoxByTitle(
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const boxByQrCode = /* GraphQL */ `
  query BoxByQrCode(
    $qrCode: String
    $sortDirection: ModelSortDirection
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BoxByQRCode(
      qrCode: $qrCode
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const boxByStatus = /* GraphQL */ `
  query BoxByStatus(
    $status: BoxStatus
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BoxByStatus(
      status: $status
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBoxLocation = /* GraphQL */ `
  query GetBoxLocation($id: ID!) {
    getBoxLocation(id: $id) {
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
export const listBoxLocations = /* GraphQL */ `
  query ListBoxLocations(
    $filter: ModelBoxLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoxLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        images {
          id
          label
          altText
          src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
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
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        locationInfo {
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
        destinationLocationInfo {
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
        box {
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
        trackingInfo {
          id
          timeOfDelivery
          userID
          isActive
          tags
          imageID
          internalNotes
          notes
          createdAt
          updatedAt
        }
        scannedByUser {
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
      nextToken
    }
  }
`;
export const boxLocationsByBoxId = /* GraphQL */ `
  query BoxLocationsByBoxId(
    $boxID: ID
    $locationInfoID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoxLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BoxLocationsByBoxId(
      boxID: $boxID
      locationInfoID: $locationInfoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        images {
          id
          label
          altText
          src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
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
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        locationInfo {
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
        destinationLocationInfo {
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
        box {
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
        trackingInfo {
          id
          timeOfDelivery
          userID
          isActive
          tags
          imageID
          internalNotes
          notes
          createdAt
          updatedAt
        }
        scannedByUser {
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
      nextToken
    }
  }
`;
export const boxLocationInfoByLocationInfoId = /* GraphQL */ `
  query BoxLocationInfoByLocationInfoId(
    $locationInfoID: ID
    $boxID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoxLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BoxLocationInfoByLocationInfoId(
      locationInfoID: $locationInfoID
      boxID: $boxID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        images {
          id
          label
          altText
          src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
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
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        locationInfo {
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
        destinationLocationInfo {
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
        box {
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
        trackingInfo {
          id
          timeOfDelivery
          userID
          isActive
          tags
          imageID
          internalNotes
          notes
          createdAt
          updatedAt
        }
        scannedByUser {
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
      nextToken
    }
  }
`;
export const boxLocationByScannedUserId = /* GraphQL */ `
  query BoxLocationByScannedUserId(
    $scannedByUserID: ID
    $scanDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoxLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BoxLocationByScannedUserId(
      scannedByUserID: $scannedByUserID
      scanDateTime: $scanDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        images {
          id
          label
          altText
          src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
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
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        locationInfo {
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
        destinationLocationInfo {
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
        box {
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
        trackingInfo {
          id
          timeOfDelivery
          userID
          isActive
          tags
          imageID
          internalNotes
          notes
          createdAt
          updatedAt
        }
        scannedByUser {
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
      nextToken
    }
  }
`;
export const boxLocationByTrackingInfoId = /* GraphQL */ `
  query BoxLocationByTrackingInfoId(
    $trackingInfoID: ID
    $scanDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoxLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BoxLocationByTrackingInfoId(
      trackingInfoID: $trackingInfoID
      scanDateTime: $scanDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        images {
          id
          label
          altText
          src
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
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
          userID
          dateAdded
          isActive
          createdAt
          updatedAt
        }
        locationInfo {
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
        destinationLocationInfo {
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
        box {
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
        trackingInfo {
          id
          timeOfDelivery
          userID
          isActive
          tags
          imageID
          internalNotes
          notes
          createdAt
          updatedAt
        }
        scannedByUser {
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
      nextToken
    }
  }
`;
export const listTrackingInfos = /* GraphQL */ `
  query ListTrackingInfos(
    $filter: ModelTrackingInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrackingInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTrackingInfo = /* GraphQL */ `
  query GetTrackingInfo($id: ID!) {
    getTrackingInfo(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const userByOrgId = /* GraphQL */ `
  query UserByOrgId(
    $orgID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    UserByOrgID(
      orgID: $orgID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
