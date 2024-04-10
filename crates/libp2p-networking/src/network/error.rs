//! Contains the [`NetworkError`] snafu types

use std::fmt::{Debug, Display};

use futures::channel::oneshot::Canceled;
use libp2p::{
    gossipsub::PublishError,
    kad::{GetRecordError, PutRecordError},
    swarm::DialError,
    TransportError,
};
use snafu::Snafu;

/// wrapper type for errors generated by the `Network`
#[derive(Debug, Snafu)]
#[snafu(visibility(pub))]
pub enum NetworkError {
    /// Error initiating dial of peer
    DialError {
        /// The underlying source of the error
        source: DialError,
    },
    /// Error during dialing or listening
    Transport {
        /// The underlying source of the error
        source: TransportError<std::io::Error>,
    },
    /// Error establishing backend connection
    TransportLaunch {
        /// The underlying source of the error
        source: std::io::Error,
    },
    /// Error building the gossipsub configuration
    #[snafu(display("Error building the gossipsub configuration: {message}"))]
    GossipsubConfig {
        /// The underlying source of the error
        message: String,
    },
    /// Error building the gossipsub instance
    #[snafu(display("Error building the gossipsub implementation {message}"))]
    GossipsubBuild {
        /// The underlying source of the error
        message: String,
    },
    /// Error if one of the channels to or from the swarm is closed
    StreamClosed,
    /// Error publishing a gossipsub message
    PublishError {
        /// The underlying source of the error
        source: PublishError,
    },
    /// Error when there are no known peers to bootstrap off
    NoKnownPeers,
}

/// Error enum for querying store
/// because for some reason, [`libp2p::kad::GetRecordError`]
/// does not derive `Error`
#[derive(Debug, Clone, Snafu)]
#[snafu(visibility(pub))]
pub enum DHTError {
    /// Get Record Error
    #[snafu(display("DHT GET internal error: {source}"))]
    GetRecord {
        /// source of error
        source: GetRecordWrapperError,
    },
    /// Get Record Error
    #[snafu(display("DHT PUT internal error: {source}"))]
    PutRecord {
        /// source of error
        source: PutRecordError,
    },
    /// nodes disagreed on the value
    #[snafu(display("Nodes disagreed on value"))]
    Disagreement,
    /// could not find 2 or more nodes that had the value
    #[snafu(display("Could not find key in DHT"))]
    NotFound,
    /// request was ignored serverside
    CancelledRequest {
        /// source of error
        source: Canceled,
    },
}

/// Wrapper Error enum for [`libp2p::kad::GetRecordError`].
/// [`libp2p::kad::GetRecordError`] does not derive [`std::error::Error`]
/// so in order to feed this into [`DHTError`] and snafu derive,
/// we need a wrapper type
#[derive(Debug, Clone)]
pub enum GetRecordWrapperError {
    /// wrapper
    GetRecordError {
        /// source of error
        source: GetRecordError,
    },
}

impl Display for GetRecordWrapperError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{self:?}")
    }
}

impl std::error::Error for GetRecordWrapperError {}
